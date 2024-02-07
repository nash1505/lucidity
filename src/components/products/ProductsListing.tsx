import { IconButton, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import productsConfig from "../../config/products.config.json";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "../../interfaces/Inteface";
import ProductView from "./ProductView";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalState } from "../../context/UserAccess";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ProductsListing = () => {
  const { products, usertype, DELETE, UPDATE } = useContext<any>(GlobalState);
  const [openProductView, setOpenProductView] = useState<{
    openModal: boolean;
    data: Product | null;
  }>({
    openModal: false,
    data: null,
  });

  const handleProductViewModal = (action: string) => {
    if (action === "cancel") {
      setOpenProductView({
        openModal: false,
        data: null,
      });
    } else {
      UPDATE(openProductView.data);
      setOpenProductView({
        openModal: false,
        data: null,
      });
    }
  };
  const deleteProduct = (name: string) => {
    DELETE(name);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 200,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
    },
    {
      field: "value",
      headerName: "Value",
      width: 150,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 150,
      renderCell(params) {
        return (
          <Stack spacing={1} direction="row" alignItems="center">
            <IconButton
              aria-label="delete"
              disabled={usertype === "user"}
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                deleteProduct(params.row.name);
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
            <IconButton
              aria-label="delete"
              disabled={usertype === "user"}
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpenProductView({
                  openModal: true,
                  data: params.row,
                });
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton disabled={usertype === "user"}>
              {usertype === "user" ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </Stack>
        );
      },
    },
  ];
  return (
    <>
      <Typography variant="h3">{productsConfig.title}</Typography>
      <div className="table-container">
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row.name}
          hideFooter={true}
          sx={{
            backgroundColor: "#212124",
            borderRadius: "10px",
          }}
        />
      </div>
      <ProductView
        open={openProductView.openModal}
        data={openProductView.data}
        handleClose={handleProductViewModal}
      />
    </>
  );
};

export default ProductsListing;

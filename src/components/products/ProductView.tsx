import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./Products.css";

import { ProductViewModal } from "../../interfaces/Inteface";
import ClearIcon from "@mui/icons-material/Clear";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 2,
};

const ProductView = (props: ProductViewModal) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-modal-header">
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Product
            </Typography>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              props.handleClose("cancel");
            }}
          >
            <ClearIcon />
          </div>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.data && props.data.name}
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            {" "}
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Category</FormLabel>
              <TextField
                hiddenLabel
                size="small"
                id="outlined-basic"
                variant="outlined"
                defaultValue={props.data && props.data.category}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">price</FormLabel>
              <TextField
                hiddenLabel
                size="small"
                id="outlined-basic"
                variant="outlined"
                defaultValue={props.data && props.data.price}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">quantity</FormLabel>
              <TextField
                hiddenLabel
                size="small"
                id="outlined-basic"
                variant="outlined"
                defaultValue={props.data && props.data.quantity}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">value</FormLabel>
              <TextField
                hiddenLabel
                size="small"
                id="outlined-basic"
                variant="outlined"
                defaultValue={props.data && props.data.value}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={7}></Grid>
          <Grid item xs={5}>
            <Button
              variant="text"
              onClick={(e) => {
                e.preventDefault();
                props.handleClose("cancel");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                props.handleClose("update");
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ProductView;

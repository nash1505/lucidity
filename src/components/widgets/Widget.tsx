import React, { useContext } from "react";
import "./Widget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import { WidgetData } from "../../interfaces/Inteface";
import { GlobalState } from "../../context/UserAccess";

const Widget = () => {
  const {widgetsData} = useContext(GlobalState)
  const widgets = [
    {
      icon: <ShoppingCartIcon />,
      title: "Total Products",
      value: widgetsData.totalProducts,
    },
    {
      icon: <CurrencyExchangeIcon />,
      title: "Total Store Value",
      value: widgetsData.totalStoreValue,
    },
    {
      icon: <RemoveShoppingCartIcon />,
      title: "Out of stocks",
      value: widgetsData.outOfStocks,
    },
    {
      icon: <CategoryIcon />,
      title: "No of Category",
      value: widgetsData.categories,
    },
  ];
  return (
    <>
      <div className="widget-container">
        {widgets.map((eachWidget) => (
          <div key={eachWidget.title}>
            <div>{eachWidget.icon}</div>
            <div>
              <div>{eachWidget.title}</div>
              <div>{eachWidget.value}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Widget;

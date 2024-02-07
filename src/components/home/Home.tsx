import React, { useContext, useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import ProductsListing from "../products/ProductsListing";
import { Product, WidgetData } from "../../interfaces/Inteface";
import { GlobalState } from "../../context/UserAccess";
import Widget from "../widgets/Widget";

type Props = {};

const Home = (props: Props) => {
  const { SET } = useContext(GlobalState);
  const fetchProductsList = async () => {
    // var data = await getRequest(productsConfig.apis.getProductsList);
    var data = [
      {
        name: "Bluetooth",
        category: "Electronic",
        value: "black",
        quantity: 5,
        price: "$30",
      },
      {
        name: "Edifier M43560",
        category: "Electronic",
        value: "black",
        quantity: 0,
        price: "$30",
      },
      {
        name: "Sony 4k ultra 55 inch TV",
        category: "Electronic",
        value: "black",
        quantity: 17,
        price: "$30",
      },
      {
        name: "Samsumg 55 inch TV",
        category: "Electronic",
        value: "black",
        quantity: 50,
        price: "$30",
      },
      {
        name: "samsumg S34 Ultra",
        category: "phone",
        value: "black",
        quantity: 0,
        price: "$30",
      },
    ];
    SET(data);
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  return (
    <div style={{ backgroundColor: "#161718", height: "100vh" }}>
      <NavBar />
      <Widget />
      <ProductsListing></ProductsListing>
    </div>
  );
};

export default Home;

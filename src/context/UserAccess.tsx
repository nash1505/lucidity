import React from "react";
import { useReducer, createContext } from "react";
import {
  GlobalStateProps,
  Product,
  ProductListingTable,
} from "../interfaces/Inteface";
// Define the initial state

const GLOBAL_STATE = {
  usertype: "admin",
  products: [],
  widgetsData: {
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStocks: 0,
    categories: 0,
  },
};

// Define the reducer
const globalReducer = (state: GlobalStateProps, action:any) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        products: state.products.filter(
          (each: any) => each.name !== action.payload
        ),
      };
    case "UPDATE":
      const productIndex = state.products.findIndex(
        (eachProduct: Product) => eachProduct.name === action.payload.name
      );

      var localState = { ...state };
      var localProduct = [...localState.products];
      localProduct[productIndex] = { ...action.payload };
      return {
        ...state,
        products: localProduct,
      };
    case "SET":
      return {
        ...state,
        products: action.payload,
      };
    case "CHANGE":
      return {
        ...state,
        usertype: action.payload,
      };
    default:
      return state;
  }
};
// Create the context
export const GlobalState = createContext<any>(GLOBAL_STATE);
GlobalState.displayName = "GlobalState";
export const GlobalStateProvider = ({ children }: any) => {
  // Create the reducer
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);
  const value = {
    ...state,
    widgetsData: {
      totalProducts: state.products.length,
      totalStoreValue: state.products.reduce(
        (value: number, curr: Product) => value + Number(curr.price.slice(1)),
        0
      ),
      outOfStocks: state.products.reduce((value: number, curr: Product) => {
        if (curr.quantity === 0) {
          return value + 1;
        }
        return value;
      }, 0),
      categories: new Set(state.products.map((each: Product) => each.category))
        .size,
    },
    DELETE: (name: string) => {
      dispatch({ type: "DELETE", payload: name });
    },
    CHANGE_USER: (user: string) => {
      dispatch({ type: "CHANGE", payload: user });
    },
    UPDATE: (updatedProduct: Product) => {
      dispatch({ type: "UPDATE", payload: updatedProduct });
    },
    SET: (data: ProductListingTable) => {
      dispatch({ type: "SET", payload: data });
    },
  };
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

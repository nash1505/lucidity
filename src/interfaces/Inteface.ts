export interface UserAccessType {
  usertype: string;
}

export interface NavBarProps {
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}

export interface Product {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
}

export interface ProductViewModal {
  open: boolean;
  data: Product | null;
  handleClose: (action: string) => void;
}
export interface ProductListingTable {
  productList: Product[];
}

export interface WidgetData {
  totalProducts: number;
  totalStoreValue: number;
  outOfStocks: number;
  categories: number;
}

export interface GlobalStateProps {
  usertype: string;
  products: Product[];
  widgetsData: {
    totalProducts: number;
    totalStoreValue: number;
    outOfStocks: number;
    categories: number;
  };
}

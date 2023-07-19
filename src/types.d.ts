type MenuItem = {
  amount: number;
} & MenuItem;

type RawMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Cart = {
  cartItems: MenuItem[];
  totalAmount: number;
};

type CartContextType = {
  addItem: (item: MenuItem) => void;
  removeItem: (item: MenuItem) => void;
} & Cart;

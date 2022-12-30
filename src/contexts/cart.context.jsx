import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};

export const CartContext = createContext({
  open: false,
  setOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const cartCount = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ open, setOpen, addItemToCart, cartItems, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

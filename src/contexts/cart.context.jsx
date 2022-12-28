import { createContext, useState } from 'react';

export const CartContext = createContext({
  open: false,
  setOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      const item = {
        ...product,
        quantity
      };
      setCart([...cart, item]);
    } else {
      // actualizar quantity
      const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
      const itemDraft = { ...cart[itemIndex] };
      itemDraft.quantity = itemDraft.quantity + quantity;
      const cartDraft = [...cart];
      cartDraft[itemIndex] = itemDraft;
      // cart[itemIndex] = itemDraft; PROHIBIDO, ya que modifica el estado de react
      setCart(cartDraft);

    }
  }

  const removeItem = (itemId) => {
    const cartDraft = cart.filter((item) => item.id !== itemId);
    setCart(cartDraft);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

  const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);

  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
};

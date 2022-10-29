import { useContext } from "react";
import { Container } from "react-bootstrap";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log({cart});

  return (
    <Container>
      <h1>Carrito de Compras</h1>
    </Container>
  );
}

export default Cart;
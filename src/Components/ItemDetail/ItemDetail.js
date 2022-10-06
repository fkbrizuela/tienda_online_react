import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Item from "../Item/Item"
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const addHandler = () =>{
      setCount(count + 1);
  }

  const lessHandler = () =>{
      if(count > 0){
          setCount(count - 1);
      }
  }

  return (
    <>
      <Item product={product} />
      <button onClick={lessHandler}> - </button>
      <strong> {count} </strong>
      <button onClick={addHandler}> + </button>
      <Link to="/cart">
        <Button variant="primary">
          Agregar al Carrito
        </Button>
      </Link>
  
    </>
  );
}

export default ItemDetail;
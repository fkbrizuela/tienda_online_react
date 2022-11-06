import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  
  return (
      <BrowserRouter basename='/tienda_online_react'>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda online de bebidas'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Lista por categoria'} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;

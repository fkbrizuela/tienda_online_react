import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart/Cart';
/* import SwApiContainer from './Components/ComponentesDePrueba/swapi/SwApiContainer.js'; */
function App() {
  return (
    <div>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { CartProvider } from './Context/CartContext';
/* import SwApiContainer from './Components/ComponentesDePrueba/swapi/SwApiContainer.js'; */
function App() {
  // acceso a un documento especifico ->detail
  useEffect(()=>{
    //obtenemos base de datos
    const database = getFirestore()
    // obtener referencia al documento
    const itemReference = doc(database, 'items', 'S3TNXFSih0wvggHFmZV7')
    // obtener el documento a partir de la referencia
    getDoc(itemReference)
      .then((snapshot)=>{
        // consulta de existencia del documento
        if(snapshot.exists()){
          // armamos un objeto literal con el id y los demas y los demas campos del documento
          const item= {
            id: snapshot.id,
            ...snapshot.data()
          };
          console.log(item);
        }
      })
      .catch(error => console.warn(error))


  },[]);
  // acceso a una coleccion -> lista
  useEffect(() => {
    //obtenemos base de datos
    const database = getFirestore()
    //obtenemos referencia de coleccion items
    const collectionReference = collection(database, 'items')
    //obtenemos los datos a partir de la referencia
    getDocs(collectionReference)
      .then((snapshot) =>{
        //armamos un listado objetos literales
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(list);
      })
      .catch((err) => console.warn(err));
  }, [])

  return (
    <div>
      <BrowserRouter >
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

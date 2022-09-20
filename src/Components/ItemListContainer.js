import '../style/ItemListContainer.css';
import { useState, useEffect } from "react";


const ItemListContainer = ({ greeting }) => {
    return ( 
        <div className="ItemListContainer">
            <h1>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
        </div>
    );
}

export default ItemListContainer;
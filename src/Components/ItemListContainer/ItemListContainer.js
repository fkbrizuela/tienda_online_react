import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return ( 
        <div className="ItemListContainer">
            <h1>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemCount/>
        </div>
    );
}

export default ItemListContainer;
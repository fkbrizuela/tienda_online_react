import { useState } from "react"


const ItemCount = () => {

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
        <div>
            <button onClick={lessHandler}> - </button>
            <strong> {count} </strong>
            <button onClick={addHandler}> + </button>
        </div>
    )
}

export default ItemCount

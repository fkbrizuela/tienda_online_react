import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h2>Usuario: {props.name}, edad: {props.age}</h2>
        </div>
    )
}

export default Saludo

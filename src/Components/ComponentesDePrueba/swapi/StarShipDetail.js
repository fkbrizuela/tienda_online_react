import React from 'react'

const StarShipDetail = ( {starship} ) => {
    return (
        <div style={{border: '1px solid black'}}>
            <strong>{starship.name}</strong>
            <div>{starship.model}</div>
            <div>{starship.crew}</div>
        </div>
    )
}

export default StarShipDetail

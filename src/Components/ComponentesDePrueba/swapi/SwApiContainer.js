import React, { useEffect, useState } from 'react'
import StarShipDetail from './StarShipDetail';

const SwApiContainer = () => {

    const [starships, setStarships] = useState([]);

    useEffect(() => {
        getStarships()
    }, []);

    const getStarships = () => {
        const URL = 'https://swapi.dev/api/starships'

        fetch(URL)
        .then(response =>  response.json() )
        .then( data => {
            console.log(data.results);
            setStarships(data.results);
        })

    }

    return (
        <div>
            {/* {starships.map(s => <li>{s.name}</li> )} */}
            {starships.map( s => <StarShipDetail key={s.url} starship={s}/> )}
        </div>
    )
}

export default SwApiContainer

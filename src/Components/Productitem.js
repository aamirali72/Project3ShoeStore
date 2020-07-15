import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function Productitem() {
    const { id } = useParams();
    console.log(id)
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Sorry product not found!</h2>

    return (
        <div>
            <h1>Welcome to Product items</h1>
            <div className="link">
                <h3> {shoe.name}</h3>
                <img src={shoe.img} height={500} alt="Shoe" />
            </div>
        </div>

    );
}

export default Productitem;
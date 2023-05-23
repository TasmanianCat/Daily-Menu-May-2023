import { useEffect } from "react";
import { useState } from 'react';
import FruitSalad from "./FruitSalad";
import CherryPie from "./CherryPie";
import CheeseNuts from "./CheeseNuts";
import CottageCheesefritters from "./CottageCheeseFritters";



function Dessert() {
    const dessertArray = [
        <FruitSalad />,
        <CherryPie />,
        <CheeseNuts />,
        <CottageCheesefritters />
    ];

    const [dessertRandom, setDessertRandom] = useState(null);

    const dessertDisplayOption = () => {
        const randomDisplayOption = Math.floor(Math.random() * dessertArray.length);
        setDessertRandom(dessertArray[randomDisplayOption]);
    };

    useEffect(() => {
        dessertDisplayOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAnotherOption = () => {
        dessertDisplayOption();
    };

    return (
        <div>
            <h2>Dessert</h2>
            {dessertRandom}
            <div>
                <button onClick={handleAnotherOption}>Another option</button>
            </div>
        </div>
    );
}

export default Dessert;
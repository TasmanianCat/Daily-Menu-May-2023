import { useEffect } from "react";
import { useState } from 'react';
import BakedChicken from "./BakedChicken";
import BoiledPrawns from "./BoiledPrawns";
import Buckwheat from "./Buckwheat";
import Shawarma from "./Shawarma";



function Dinner() {
    const dinnerArray = [
        <BakedChicken />,
        <BoiledPrawns />,
        <Buckwheat />,
        <Shawarma />
    ];

    const [dinnerRandom, setDinnerRandom] = useState(null);

    const dinnerDisplayOption = () => {
        const randomDisplayOption = Math.floor(Math.random() * dinnerArray.length);
        setDinnerRandom(dinnerArray[randomDisplayOption]);
    };

    useEffect(() => {
        dinnerDisplayOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAnotherOption = () => {
        dinnerDisplayOption();
    };

    return (
        <div>
            <h2>Dinner</h2>
            {dinnerRandom}
            <div>
                <button onClick={handleAnotherOption}>Another option</button>
            </div>
        </div>
    );
}

export default Dinner;
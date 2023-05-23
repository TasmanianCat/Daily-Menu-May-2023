import { useEffect } from "react";
import { useState } from 'react';
import ScrambleSimple from "./ScrambleSimple";
import Scramble from "./Scramble";
import ToastsCheese from "./ToastsCheese";
import Oatmeal from './Oatmeal';


function Breakfast() {
    const breakfastArray = [
        <ScrambleSimple />,
        <Scramble />,
        <ToastsCheese />,
        <Oatmeal />
    ];

    const [breakfastRandom, setBreakfastRandom] = useState(null);

    const breakfastDisplayOption = () => {
        const randomDisplayOption = Math.floor(Math.random() * breakfastArray.length);
        setBreakfastRandom(breakfastArray[randomDisplayOption]);
    };

    useEffect(() => {
        breakfastDisplayOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAnotherOption = () => {
        breakfastDisplayOption();
    };

    return (
        <div>
            <h2>Breakfast</h2>
            {breakfastRandom}
            <div>
                <button onClick={handleAnotherOption}>Another option</button>
            </div>
        </div>
    );
}

export default Breakfast;
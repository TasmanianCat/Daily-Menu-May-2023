import { useEffect } from "react";
import { useState } from 'react';
import Pilaf from "./Pilaf";
import Dumplings from "./Dumplings";
import ChickenSoup from "./ChickenSoup"
import PastaPrawn from "./PastaPrawn";



function Lunch() {
    const lunchArray = [
        <Pilaf />,
        <Dumplings />,
        <ChickenSoup />,
        <PastaPrawn />
    ];

    const [lunchRandom, setLunchRandom] = useState(null);

    const lunchDisplayOption = () => {
        const randomDisplayOption = Math.floor(Math.random() * lunchArray.length);
        setLunchRandom(lunchArray[randomDisplayOption]);
    };

    useEffect(() => {
        lunchDisplayOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAnotherOption = () => {
        lunchDisplayOption();
    };

    return (
        <div>
            <h2>Lunch</h2>
            {lunchRandom}
            <div>
                <button onClick={handleAnotherOption}>Another option</button>
            </div>
        </div>
    );
}

export default Lunch;
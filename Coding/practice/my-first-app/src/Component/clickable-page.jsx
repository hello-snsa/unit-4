import React from "react";


export default function Clickable({ num }) {



    const [nums, setNum] = React.useState(num);

    const handleInc = (value) => {
        setNum(nums + value);

    };
    const add10 = () => {
        setNum(nums + 10);

    };
    const add100 = () => {
        setNum(nums + 100);

    };



    return (
        <div className="clickableMain">

            <h1> Inside Clickable</h1>

            <h1>{nums}</h1>

            <button onClick={() => handleInc(1)}>
                ADD
            </button>
            <button onClick={() => handleInc(-1)}>
                Subs
            </button>


            <button onClick={add10} >Add 10</button>
            <button onClick={() => add100()} >Add 100</button>


        </div >
    )
}

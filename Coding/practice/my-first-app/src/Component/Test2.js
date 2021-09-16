import React from "react"

export default function Test2() {

    const [status, setStatus] = React.useState(true);

    const [myStatus, setMystatus] = React.useState("Hey")

    function fun() {
        if (status) {
            setMystatus("hello there");
        }
        else {
            setMystatus("by-by...");
        }
    }

    const toggleBoth = () => {
        setStatus(!status)
        fun();

    }


    return (

        <>

            <h1> Hello from TEST 2 </h1>

            <h1>The status is
                {status ? <h1>hello </h1> : <h1>bye... </h1>}
            </h1>



            {
            }

            <h1>The status is {myStatus}
            </h1>



            <button onClick={() => setStatus(true)}
            >show</button>
            <button onClick={() => setStatus(false)} >hide</button>
            <button onClick={toggleBoth}
            >Toggle Me</button>






        </>


    )
}
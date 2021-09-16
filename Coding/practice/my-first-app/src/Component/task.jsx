import React from "react"


export default function Task() {

    const [query, setQuery] = React.useState("");



    const handleChange = (e) => {
        // alert("handleChange")

        let val = e.value;
        setQuery(val)
    }

    const handleAdd = () => {
        alert("handle ADD")
    }


    return (
        <div>
            <h1> Hello from Task </h1>

            <div>
                <input value={query} onChange={handleChange} placeholder="add Task here..." />
                {/* <input value={query} onChange={(e) => setQuery(e.value)} placeholder="add Task here..." /> */}


                {/* <button onClick={handleAdd}>Add</button> */}
                <button onClick={() => setQuery("value changed")}>Add</button>

            </div>







        </div>
    )




}
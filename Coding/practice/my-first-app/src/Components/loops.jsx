

export default function Loops({ arr, str, strArr, total }) {
    // export default function Loops({ total }) {

    return (
        <>
            <h1>Hello from Loops</h1>
            <h1>{arr}, {str}, {strArr}</h1>
            <h2>arr:</h2>
            {
                arr.map((e) => {
                    return <h3>{arr[e]}</h3>
                })
            }

            <p> value is {total} </p>

            <h1>bye!!!</h1>


        </>
    );
}
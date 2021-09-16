import { useEffect, useState } from "react";
function Counter() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            // console.log(count)
            setCount(function (prevVal) {
                if (prevVal === 0) {
                    clearInterval(id);
                    return 0;
                }
                return prevVal - 2;
            });
            // console.log(count)
        }, 1000);
        return () => {
            console.log("unmont");
            clearInterval(id);
        };
    }, []);
    return <>Counter is: {count}</>;
}
export default Counter;
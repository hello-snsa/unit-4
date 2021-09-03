
import './counter.css';


export default function Counter({ count, name, age, gender }) {

    return (
        <div className="counterMain">
            <h1>inside Counter </h1>
            <h1>Counter value is {count}</h1>
            <h1>Name is {name}</h1>
            <h1> Age is {age}  and Gender is : {gender}</h1>

            {count += 10}
            <h1>Counter updated value is {count}</h1>
            <h1>Name is {name + " ali"}</h1>
        </div>
    )
}
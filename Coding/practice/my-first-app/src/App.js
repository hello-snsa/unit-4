import './App.css';
import Clickable from './Components/clickable-page';
import Counter from './Components/counter';
import List from './Components/list';
import List2 from './Components/list2';
import Loops from './Components/loops';
import Task from './Components/task';
import Test1 from './Components/test1';

function App() {

  let num = 0;
  let naam = "Snsa"

  let arr = [1, 2, 3, 4];
  let str = "Hello There";
  let strArr = ["abc", "def", "ghi"];
  let total = [arr, str, strArr];

  const data = [
    { "title": "T-shirt", "price": "256", "InStock": "yes" },
    { "title": "shoes", "price": "499", "InStock": "yes" }
  ]


  return (
    <div className="App">
      <h1> Hello world !!!</h1>
      {/* 
      <List />
      <List2 /> 
//passing Multiple values.


      <Counter count={num} name={naam} gender="Male" age="27" />
      
    */}

      {/* Loop  */}
      {/* <Loops arr={arr} str={str} strArr={strArr} />
      {
        total.map((e) => {

          return <Loops arr={arr} total={e} />

        })
      } */}

      {/* Passing object */}
      {/* {data.map((e) => {
        
        return <Test1 title={e.title} price={e.price} InStock={e.InStock} />
        
      })
      
      } */}

      {/* Add Substract using UseState */}
      {/* < Clickable num={num} /> */}

      <Task />




    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
// const randomNum = require('random-num')
function App() {
  const [Count,setCount]=useState(0);
  function incrementHandler(){
    setCount(Count+1);

  }
  function decrementHandler(){
    setCount(Count-1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-4">
      <div className="text-3xl font-extrabold">
        <h1>Count React App</h1>
      </div>
      <div className="bg-white flex text-xl text-black gap-16 py-3 px-3 rounded-md justify-center">
        <button onClick={decrementHandler}  className="text-center border-r-2 w-20 text-5xl border-[grey]">
          -
        </button>
        <div className="text-center  w-10 text-5xl font-bold bg-white text-black">
          {Count}
        </div>
        <button onClick={incrementHandler}  className="text-center border-l-2 w-20 text-5xl border-[grey]" >
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-black text-[white] py-1 px-3 rounded-md mx-6 w-20">
        Reset
      </button>
    </div>
  );
}

export default App;

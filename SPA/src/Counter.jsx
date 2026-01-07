import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    
    <div style={{ textAlign:"center", marginTop:"20px", color:"grey", fontFamily:"Arial, sans-serif", fontSize:"12px", border:"2px solid black", padding:"20px", width:"300px", margin:"auto", borderRadius:"10px" }}>

      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;

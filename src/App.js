import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // we want some code to run ONLY on the first component render
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;

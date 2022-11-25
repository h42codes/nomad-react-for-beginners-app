import { useState, useEffect } from "react";

// useEffect's first arg -> the code that we want to run only once

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // we want some code to run ONLY on the first component render
  console.log("I ran all the time.");
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once.");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;

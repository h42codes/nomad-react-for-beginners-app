import { useState, useEffect } from "react";

// execute a code when a component is destroyed

function Hello() {
  useEffect(() => {
    console.log("Created!");
    // This is a cleanup function that allos you to do something when the component is destroyed
    return () => console.log("Destroyed"); // this is run when the component is destroyed
  }, []); // having no dependencies means it runs only one time
  return <h1>Hello</h1>;
}

function Hello2() {
  // Cleanup function
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("hi");
    // when the component is destroyed, react will run the function returned by this function
    return byFn;
  }
  useEffect(hiFn, []);

  useEffect(() => {
    console.log("HI");
    return () => {
      console.log("BYE");
    };
  }, []);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

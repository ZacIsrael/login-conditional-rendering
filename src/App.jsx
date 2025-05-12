import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  // Each component should have a single responsibiltiy

  // boolean that indicates whether or not a user is logged in
  let isLoggedIn = false;

  // render HTML elements based on a condition
  // function renderConditionally(){
  //   if(isLoggedIn){
  //     return <h1>Hello</h1>
  //   } else {
  //     // prompt the user to login 
  //     return <Login />
  //   }
  // }

  return (
    <>
      <div className="container">
        {/* ternary operator: if isLoggedIn is true, display the h1 tag; otherwise, display the Login component */}
        {/* { isLoggedIn ? <h1>Hello</h1> : <Login />} */}
        {/* if it is at least 6:00 pm (17 is 5:00 pm but I'm not calculating minutes), 
        ask the user why they are still working; otherwise, render the Login component */}
        {new Date().getHours() > 17 ? <h1>Why are you still working?</h1> : <Login />}

        {/* The following lines of code do the exact same thing */}
        {new Date().getHours() > 17 ? <h1>Why are you still working?</h1> : null}
        {/* && allows javascript to read the condition on the left; if it's false,
        javascript won't even waste its time trying to evaluate the function on 
        the right because it does not matter. && needs both statements to be true */}
        {new Date().getHours() > 17 && <h1>Why are you still working?</h1>}
      </div>
    </>
  );
}

export default App;

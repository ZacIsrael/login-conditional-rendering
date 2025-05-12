import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  // Each component should have a single responsibiltiy

  

  //Challenge: Without moving the userIsRegistered variable,
  //1. Show Login as the button text if userIsRegistered is true.
  //Show Register as the button text if userIsRegistered is false.
  //2. Only show the Confirm Password input if userIsRegistered is false.
  //Don't show it if userIsRegistered is true.

  // boolean that indicates whether or user is registered or not (In a real application,
  // sessions & cookies would be used to keep track of this)
  let userIsRegistered = false;

  return (
    <div className="container">
      <Form registered={userIsRegistered}/>
    </div>
  );
 


// boolean that indicates whether or not a user is logged in
// let isLoggedIn = false;
  // return (
  // <>
  {
    /* Notes: */
  }
  // <div className="container">
  {
    /* ternary operator: if isLoggedIn is true, display the h1 tag; otherwise, display the Login component */
  }
  {
    /* { isLoggedIn ? <h1>Hello</h1> : <Login />} */
  }
  {
    /* if it is at least 6:00 pm (17 is 5:00 pm but I'm not calculating minutes), 
        ask the user why they are still working; otherwise, render the Login component */
  }
  {
    /* {new Date().getHours() > 17 ? <h1>Why are you still working?</h1> : <Login />} */
  }

  {
    /* The following lines of code do the exact same thing */
  }
  // {new Date().getHours() > 17 ? <h1>Why are you still working?</h1> : null}
  {
    /* && allows javascript to read the condition on the left; if it's false,
        javascript won't even waste its time trying to evaluate the function on 
        the right because it does not matter. && needs both statements to be true */
  }
  {
    /* {new Date().getHours() > 17 && <h1>Why are you still working?</h1>} */
  }
  {
    /* </div> */
  }
  // </>
  // )
}

export default App;

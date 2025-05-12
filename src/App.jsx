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

  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <Login />
      </div>
    </>
  );
}

export default App;

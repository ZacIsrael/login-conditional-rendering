import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  // Each component should have a single responsibiltiy

  // boolean that indicates whether or not a user is logged in
  let isLoggedIn = false;

  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <Form />
      </div>
    </>
  );
}

export default App;

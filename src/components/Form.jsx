import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      {/* only display the "Confirm Password" input field if the user has not been registered */}
      {!props.registered && <Input type="text" placeholder="Confirm Password" />}
      {props.registered ? <button type="submit">Login</button> : <button type="submit">Register</button>}
    
    </form>
  );
}

export default Login;

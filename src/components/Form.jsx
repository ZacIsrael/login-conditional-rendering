import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      {props.registered ? 
      <><Input type="text" placeholder="Username" /><Input type="text" placeholder="Password" /><button type="submit">Login</button></>
   : 
   <><Input type="text" placeholder="Username" /><Input type="text" placeholder="Password" /><Input type="text" placeholder="Confirm Password" /><button type="submit">Register</button></>
   }
    </form>
  );
}

export default Login;

import React from 'react';
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function Greeting(props) {
    const isLoggedIn = false;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  export default Greeting;

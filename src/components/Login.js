import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`I submit:${event.target.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;

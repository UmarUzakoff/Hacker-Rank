// AuthForm.js
import React, { useState } from "react";
import LoginForm from "./Login/Login";
import RegistrationForm from "./Register/Register";

const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Register</button>
      </div>
      {showLogin ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default AuthForm;

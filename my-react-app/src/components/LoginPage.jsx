import React from "react";
import AuthLayout from "./Auth";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <LoginForm />
      </div>
      
    </AuthLayout>
  );
};

export default LoginPage;

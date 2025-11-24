import React from "react";
import AuthLayout from "./Auth";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <RegisterForm />
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;

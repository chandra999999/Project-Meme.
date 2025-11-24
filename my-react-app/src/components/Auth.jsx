// AuthLayout.jsx
const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "20px", // added padding so content has breathing space
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "30px",
          borderRadius: "10px",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;

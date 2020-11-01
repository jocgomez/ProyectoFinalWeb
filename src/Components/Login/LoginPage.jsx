import React from "react";
import ImageLogin from "../Images/Login/ImageLogin";
import Login from "./Login";

function LoginPage() {
  return (
    <div className="o-login-page">
      <ImageLogin
        alt={"Salón de belleza"}
        image={
          "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=4368&w=2912"
        }
      />
      <Login />
    </div>
  );
}

export default LoginPage;

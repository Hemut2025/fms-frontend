"use client";
import "../styles/loginpage.css";
import HemutLogo from "../assets/HemutLogo";
import Card from "../components/login-components/Card";
import SignButton from "../components/login-components/SignButton";
import AccountPrompt from "../components/login-components/AccountPrompt";
import Greeting from "../components/login-components/Greeting";
import LogIn from "../components/login-components/LogIn";
import LogInHome from "../components/login-components/LogInHome";
import { useState } from "react";
const LogoutPage = () => {
  return (
    <LogInHome>
      <div className="leftLogo">
        <HemutLogo color="#072031" width="130" />
      </div>
      <div className="rightSignup">
        <div className="topLogo">
          <HemutLogo color="#072031" width="90" />
        </div>
        <LogIn>
          <Greeting>Welcome Back</Greeting>
          <Card>Email</Card>
          <Card>Password</Card>
          <ForgotPassword />
          <RememberMe />
          <SignButton>Sign In</SignButton>
          <AccountPrompt
            message="Don't have an account?"
            linkText="Sign up"
            href="/logout/signup"
          />
        </LogIn>
      </div>
    </LogInHome>
  );
};

const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        Forgot Your Password?
      </p>
    </div>
  );
};

const RememberMe = () => {
  return (
    <div className="remember-me">
      <SVGCheckmark />
      <div className="message">
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#333333",
          }}
        >
          Remember Me
        </p>
      </div>
    </div>
  );
};
const SVGCheckmark = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleClick = () => {
    setRememberMe((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: 0,
        border: "none",
        background: "none",
        cursor: "pointer",
        outline: "none",
        display: "flex", // Ensures proper alignment
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "4px",
          overflow: "hidden",
          width: "22px",
          height: "22px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: rememberMe ? "black" : "white",
          border: "2px solid black",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z"
            stroke={rememberMe ? "black" : "white"}
            strokeWidth="4"
            fill={rememberMe ? "black" : "white"}
          />
          {rememberMe && (
            <path
              d="M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
              fill="white"
            />
          )}
        </svg>
      </div>
    </button>
  );
};

export default LogoutPage;

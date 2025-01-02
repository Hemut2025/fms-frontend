"use client";
import SignButton from "../../components/login-components/SignButton";
import AccountPrompt from "../../components/login-components/AccountPrompt";
import Greeting from "../../components/login-components/Greeting";
import Card from "../../components/login-components/Card";
import LogIn from "../../components/login-components/LogIn";
import LogInLeft from "@/app/components/login-components/LogInLeft";
import LogInRight from "@/app/components/login-components/LogInRight";
const SignUpPage = () => {
  return (
    <>
      <LogInLeft />
      <LogInRight>
        <LogIn>
          <Greeting>Create your account</Greeting>
          <Card>Name</Card>
          <Card>Email</Card>
          <Card>Password</Card>
          <div style={{ padding: "2px 0" }}></div>
          <SignButton>Sign Up</SignButton>
          <AccountPrompt
            message="Already have an account?"
            linkText="Sign In"
            href="/logout"
          />
        </LogIn>
      </LogInRight>
    </>
  );
};
export default SignUpPage;

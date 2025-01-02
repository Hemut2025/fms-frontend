"use client";
import SignButton from "../../components/login-components/SignButton";
import Greeting from "../../components/login-components/Greeting";
import Card from "../../components/login-components/Card";
import LogIn from "../../components/login-components/LogIn";
import Stepper1 from "../../assets/Stepper1";
import OnboardingLeft from "@/app/components/login-components/OnboardingLeft";
import OnboardingRight from "@/app/components/login-components/OnboardingRight";
const CompanyInfo = () => {
  return (
    <>
      <OnboardingLeft>
        <Stepper1 />
      </OnboardingLeft>
      <OnboardingRight>
        <LogIn>
          <Greeting>Company Information</Greeting>
          <Card>Company name</Card>
          <Card>DOT Number</Card>
          <Card isSelect={true}>Company Size</Card>
          <div style={{ padding: "2px 0" }}></div>
          <SignButton>Continue</SignButton>
        </LogIn>
      </OnboardingRight>
    </>
  );
};

export default CompanyInfo;

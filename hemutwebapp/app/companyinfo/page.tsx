"use client";
import "../styles/companyinfo.css";
import LogInHome from "../components/login-components/LogInHome";
import SignButton from "../components/login-components/SignButton";
import Greeting from "../components/login-components/Greeting";
import Card from "../components/login-components/Card";
import HemutLogo from "../assets/HemutLogo";
import LogIn from "../components/login-components/LogIn";
import Stepper1 from "../assets/Stepper1";
const CompanyInfo = () => {
  return (
    <LogInHome>
      <div className="leftSide">
        <div className="logo">
          <HemutLogo color="#072031" width="130" />
        </div>
        <Stepper1 />
      </div>
      <div className="rightSide">
        <div className="topLogo">
          <HemutLogo color="#072031" width="90" />
        </div>
        <LogIn>
          <Greeting>Company Information</Greeting>
          <Card>Company name</Card>
          <Card>DOT Number</Card>
          <Card isSelect={true}>Company Size</Card>
          <div style={{ padding: "2px 0" }}></div>
          <SignButton>Continue</SignButton>
        </LogIn>
      </div>
    </LogInHome>
  );
};

export default CompanyInfo;

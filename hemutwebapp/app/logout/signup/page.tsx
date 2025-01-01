import "../../styles/signuppage.css";
import LogInHome from "../../components/login-components/LogInHome";
import SignButton from "../../components/login-components/SignButton";
import AccountPrompt from "../../components/login-components/AccountPrompt";
import Greeting from "../../components/login-components/Greeting";
import Card from "../../components/login-components/Card";
import HemutLogo from "../../assets/HemutLogo";
import LogIn from "../../components/login-components/LogIn";
const SignUpPage = () => {
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
          <Greeting>Create your account</Greeting>
          <Card>Name</Card>
          <Card>Email</Card>
          <Card>Password</Card>
          <SignButton>Sign Up</SignButton>
          <AccountPrompt
            message="Already have an account?"
            linkText="Sign In"
            href="/logout"
          />
        </LogIn>
      </div>
    </LogInHome>
  );
};
export default SignUpPage;

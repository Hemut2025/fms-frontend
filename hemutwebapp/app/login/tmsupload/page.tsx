"use client";
import "../../styles/tmsupload.css";
import Upload from "../../components/login-components/Upload";
import Stepper2 from "../../assets/Stepper2";
import OnboardingLeft from "@/app/components/login-components/OnboardingLeft";
import OnboardingRight from "@/app/components/login-components/OnboardingRight";
const TMSUploadScreen = () => {
  return (
    <>
      <OnboardingLeft>
        <Stepper2 />
      </OnboardingLeft>
      <OnboardingRight>
        <Upload />
      </OnboardingRight>
    </>
  );
};

export default TMSUploadScreen;

"use client";
import "../styles/tmsupload.css";
import LogInHome from "../components/login-components/LogInHome";
import HemutLogo from "../assets/HemutLogo";
import Upload from "../components/login-components/Upload";
import Stepper2 from "../assets/Stepper2";
const TMSUploadScreen = () => {
  return (
    <LogInHome>
      <div className="leftSide">
        <div className="logo">
          <HemutLogo color="#072031" width="130" />
        </div>
        <div
          style={{
            border: "5px red solid",
            marginTop: "10vh",
            display: "flex",
          }}
        >
          <Stepper2 />
        </div>
      </div>
      <div className="rightSide">
        <div className="topLogo">
          <HemutLogo color="#072031" width="90" />
        </div>
        <Upload />
      </div>
    </LogInHome>
  );
};

export default TMSUploadScreen;

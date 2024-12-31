import MessagesIcon from "../../assets/MessagesIcon";
import "./DashboardHeader.css";
const DashboardHeader = () => {
  return (
    <div className="headerContent">
      <div className="header-item title">
        <h1 style={{ color: "#313131" }}>Dashboard</h1>
      </div>
      <div className="header-item welcome">
        <p style={{ color: "#9B9B9B", fontSize: "19px" }}>
          Welcome, <i>name</i>
        </p>
      </div>
      <div className="header-item messages">
        {MessagesIcon && <MessagesIcon />}
        <p style={{ color: "#7D7D7D", fontSize: "15px" }}>
          You have _ new messages
        </p>
      </div>
    </div>
  );
};
export default DashboardHeader;

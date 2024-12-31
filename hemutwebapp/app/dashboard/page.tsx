import "../styles/dashboard.css";
import DashboardHeader from "../components/dashboard-components/DashboardHeader";
import ActivitySummary from "../components/dashboard-components/ActivitySummary";
import PnlBreakdown from "../components/dashboard-components/PnlBreakdown";
import MaintenanceSnippet from "../components/dashboard-components/MaintenanceSnippet";
import DocumentsFooter from "../components/dashboard-components/DocumentsFooter";
const Dashboard = () => {
  return (
    <div className="page-content">
      <div className="topBar"></div>
      <div className="header">
        <DashboardHeader />
      </div>
      <div className="dashboard">
        <ActivitySummary />
        <div className="info">
          <PnlBreakdown />
          <MaintenanceSnippet />
          <DocumentsFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

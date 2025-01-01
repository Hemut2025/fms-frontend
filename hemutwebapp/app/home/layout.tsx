import NavigationPanel from "../components/nav-components/NavigationPanel";
import "../styles/home.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <NavigationPanel />
      <main className="main-content">{children}</main>
    </div>
  );
}

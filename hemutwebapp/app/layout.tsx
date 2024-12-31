import NavigationPanel from "./components/nav-components/NavigationPanel";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <NavigationPanel />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}

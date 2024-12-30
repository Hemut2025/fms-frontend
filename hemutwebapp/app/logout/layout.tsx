export const metadata = {
  title: "Logout",
  description: "Logout Screen",
};

export default function LogoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main> {/* No NavigationPanel here */}
      </body>
    </html>
  );
}

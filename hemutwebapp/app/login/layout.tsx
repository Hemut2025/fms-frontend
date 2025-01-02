export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}

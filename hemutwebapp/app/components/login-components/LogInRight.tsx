import HemutLogo from "@/app/assets/HemutLogo";

export default function LogInRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "50vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          width: "200px",
          height: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HemutLogo color="#072031" width="90" />
      </div>
      {children}
    </div>
  );
}

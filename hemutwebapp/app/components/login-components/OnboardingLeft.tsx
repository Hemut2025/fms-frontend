import HemutLogo from "@/app/assets/HemutLogo";

export default function OnboardingLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "35vw",
        backgroundImage: "linear-gradient(210deg, #B1D5ED 0.68%, #FDAB13 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          paddingTop: "10vh",
        }}
      >
        <HemutLogo color="#072031" width="130" />
      </div>
      <div
        style={{
          marginTop: "10vh",
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
}

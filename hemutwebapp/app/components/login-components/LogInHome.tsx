type logInHomeProps = {
  children?: React.ReactNode;
};
const LogInHome = ({ children }: logInHomeProps) => {
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
};

export default LogInHome;

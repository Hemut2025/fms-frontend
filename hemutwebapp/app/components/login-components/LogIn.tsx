type logInProps = {
  children?: React.ReactNode;
};
const LogIn = ({ children }: logInProps) => {
  return (
    <div
      style={{
        marginTop: "5vw",
        minHeight: "60vh",
        minWidth: "35vw",
        // border: "5px green solid",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
export default LogIn;

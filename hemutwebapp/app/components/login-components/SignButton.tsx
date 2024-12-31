import "./SignButton.css";
type signButtonProps = {
  children?: React.ReactNode;
};
const SignButton = ({ children }: signButtonProps) => {
  return (
    <div className="logButton">
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: 420,
          fontSize: "20px",
          lineHeight: "24px",
          color: "#FFFFFF",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
};

export default SignButton;

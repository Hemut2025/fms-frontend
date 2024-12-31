import "./Greeting.css";
type greetingProps = {
  children?: React.ReactNode;
};
const Greeting = ({ children }: greetingProps) => {
  return (
    <div className="greeting">
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "45px",
        }}
      >
        {children}
      </p>
    </div>
  );
};
export default Greeting;

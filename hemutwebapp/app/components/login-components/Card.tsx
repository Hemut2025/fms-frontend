import "./Card.css";
type cardProps = {
  children?: React.ReactNode;
};
const Card = ({ children }: cardProps) => {
  return (
    <div className="card">
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          color: "#666666",
        }}
      >
        {children}
      </p>
      <div className="input-bar"></div>
    </div>
  );
};

export default Card;

import "./SignButton.css";
import Link from "next/link";
type signButtonProps = {
  children?: React.ReactNode;
  href?: string;
};
const SignButton = ({ children, href = "/" }: signButtonProps) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className="logButton">
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 420,
            fontSize: "20px",
            lineHeight: "24px",
            margin: 0,
            padding: 0,
          }}
        >
          {children}
        </p>
      </div>
    </Link>
  );
};

export default SignButton;

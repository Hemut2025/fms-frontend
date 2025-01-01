import "./AccountPrompt.css";
import Link from "next/link";

type accountPromptProps = {
  message: string;
  linkText: string;
  href?: string;
};

const AccountPrompt = ({
  message,
  linkText,
  href = "#",
}: accountPromptProps) => {
  return (
    <div className="signUpFlag">
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
          color: "#666666",
        }}
      >
        {message}
        <Link
          href={href}
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            textDecoration: "underline",
            textDecorationStyle: "solid",
            color: "#000000",
            paddingLeft: "5px",
          }}
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AccountPrompt;

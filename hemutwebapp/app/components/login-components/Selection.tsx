import "./Selection.css";
type SelectionProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function Selection({
  children,
  isSelected = false,
  onClick,
}: SelectionProps) {
  return (
    <div
      onClick={onClick}
      className={`selection-container ${isSelected ? "selected" : ""}`}
    >
      <p className="selection-text">{children}</p>
    </div>
  );
}

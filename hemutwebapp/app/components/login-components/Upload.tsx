import "./Upload.css";
import { useState } from "react";
import Selection from "./Selection";
import DragDrop from "@/app/core/DragDrop";
import SignButton from "./SignButton";
type SelectionType = "csv" | "paper" | "manual";
export default function Upload() {
  const [selectedType, setSelectedType] = useState<SelectionType>("csv");
  const uploadContent = () => {
    switch (selectedType) {
      case "csv":
        return <DragDrop />;
      case "paper":
        return <div>paper</div>;
      case "manual":
        return <div>manual input</div>;
    }
  };

  return (
    <div className="container">
      <div className="header">
        <p
          style={{
            color: "#000",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          TMS Upload
        </p>
      </div>
      <div className="selectUploadType">
        <p
          style={{
            color: "#666",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Select upload type
        </p>
      </div>
      <div className="selectionRow">
        <Selection
          isSelected={selectedType == "csv"}
          onClick={() => setSelectedType("csv")}
        >
          CSV
        </Selection>
        <Selection
          isSelected={selectedType == "paper"}
          onClick={() => setSelectedType("paper")}
        >
          Paper
        </Selection>
        <Selection
          isSelected={selectedType == "manual"}
          onClick={() => setSelectedType("manual")}
        >
          Manual
        </Selection>
      </div>
      <div>{uploadContent()}</div>
      <div style={{ paddingTop: "1vh" }} />
      <SignButton>Continue</SignButton>
    </div>
  );
}

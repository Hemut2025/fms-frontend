"use client";
import "./Card.css";
import { TextField, MenuItem } from "@mui/material";

type cardProps = {
  children?: React.ReactNode;
  isSelect?: boolean;
};

const Card = ({ children, isSelect = false }: cardProps) => {
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
      <div className="input-bar">
        {isSelect ? (
          <TextField
            select
            fullWidth
            defaultValue=""
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                color: "#666666",
                padding: "0 15px",
                "&:before, &:after": {
                  display: "none",
                },
              },
              "& .MuiInput-input": {
                textOverflow: "ellipsis",
              },
            }}
          >
            <MenuItem value="">Select an option</MenuItem>
            <MenuItem value="option1">1-9</MenuItem>
            <MenuItem value="option2">10-49</MenuItem>
            <MenuItem value="option3">50-249</MenuItem>
            <MenuItem value="option3">250+</MenuItem>
          </TextField>
        ) : (
          <TextField
            fullWidth
            placeholder="Enter here"
            variant="standard"
            sx={{
              "& .MuiInput-root": {
                color: "#666666",
                padding: "0 15px",
                "&:before, &:after": {
                  display: "none",
                },
              },
              "& .MuiInput-input": {
                textOverflow: "ellipsis",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;

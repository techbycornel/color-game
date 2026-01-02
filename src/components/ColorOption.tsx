import React from "react";

interface ColorOptionProps {
  color: string;
  onClick: (color: string) => void;
}

const ColorOption: React.FC<ColorOptionProps> = ({ color, onClick }) => {
  return (
      <button
        data-testid="colorOption"
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          margin: "10px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => onClick(color)}
      ></button>
  );
};

export default ColorOption;

import React from "react";

export default function CustomText({ text, textSize, textColor, centerText }) {
  return (
    <p
      // style={{ fontSize: textSize }}
      className={`${textColor} ${textSize} font-bold font-[montserrat] tracking-[2px] ${
        centerText ? "text-center" : "text-left"
      }`}
    >
      {text}
    </p>
  );
}

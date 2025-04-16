import React from "react";

export default function CustomText({ text, textSize, textColor }) {
  return (
    <p
      // style={{ fontSize: textSize }}
      className={`text-[${textColor}] ${textSize} font-bold font-[montserrat] tracking-[2px] text-center`}
    >
      {text}
    </p>
  );
}

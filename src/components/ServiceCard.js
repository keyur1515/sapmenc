import React from "react";
import ThemeButton from "./ThemeButton";

function ServiceCard({ title, button_content }) {
  return (
    <div className="text-white overflow-hidden text-center max-h-[300px] max-w-[350px] flex flex-col items-center p-6 gap-4 rounded-xl shadow-[0px_0px_8px_5px_rgba(0,188,212,0.3)]">
      <h1 className="text-2xl h-[60px] w-[90%] overflow-hidden">{title}</h1>
      <h5 className="truncate">Mail us your requirements</h5>
      <ThemeButton content={button_content} />
    </div>
  );
}

export default ServiceCard;

import React from "react";
import { mailId } from "../assets/contacts.js";

function ThemeButton({ content }) {
  return (
    <button className="text-white pointer cursor-pointer font-semibold transition duration-300 ease-in-out bg-black text-lg py-4 px-8 rounded-xl shadow-[0px_0px_8px_5px_rgba(0,188,212,0.3)] hover:shadow-[0px_0px_8px_5px_rgba(0,188,212,0.8)]">
      {content}
    </button>
  );
}

export default ThemeButton;

import React from "react";
import { phoneNumber } from "@/assets/contacts";

function Footer() {
  return (
    <div className="bg-zinc-700 text-white p-8 lg:p-16 text-center font-bold">
      <h1 className="text-2xl">
        Imagine a nice and creative Footer right here!!
      </h1>
      <p className="mt-16 text-xl">
        You can call us if you want: <br />{" "}
        <a href={`tel:${phoneNumber}`} className="text-cyan-300">
          +91 (974) 218-5404
        </a>
      </p>
      <p className="mt-8">OH...but importantly</p>
      <p className="mt-8">© 2023 www.sapmenc.ml. All rights reserved.</p>
    </div>
  );
}

export default Footer;

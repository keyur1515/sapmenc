import React from "react";
import ServiceCard from "./ServiceCard";
import { mailId } from "@/assets/contacts";

function Services() {
  return (
    <>
      <div className="flex justify-center py-16" id="services">
        <p className="text-white font-semibold text-center md:text-lg sm:max-w-lg">
          <span className="text-cyan-300">Update:</span> Our really Creative,
          Eye Catching, Aesthetic website is currently under development (Went
          overboard on the praising)..
          <br />
          <br />
          <br />
          Nonetheless, our highly experienced Tech Team is all ears and we are
          more than eager to deliver your software requirements !!
        </p>
      </div>
      <div className="text-white font-semibold flex flex-col items-center">
        <h1 className="text-3xl py-8 text-center">
          Here's what we can do for you...
        </h1>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Want your dream website built?"
              button_content="Right Here"
            />
          </a>
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Need a Custom Software Built?"
              button_content="Over Here"
            />
          </a>
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Got an idea for a Mobile App?"
              button_content="Here Again"
            />
          </a>
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Need a UI/UX Design for an idea?"
              button_content="Yup, Right Here"
            />
          </a>
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Want some good, creative Graphic Designs?"
              button_content="Here 😎"
            />
          </a>
          <a href={`mailto:${mailId}`}>
            <ServiceCard
              title="Need some good organic marketing"
              button_content="Here it is!"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;

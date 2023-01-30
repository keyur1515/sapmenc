import React from "react";
import ThemeButton from "./ThemeButton";

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-8" id="about">
        <p className="basis-4/6 text-white font-semibold ">
          SapMen C. - Stand Along Personage, Mentality: Creative/Consulting.
          <br /> <br />
          SapMen C. is a (soon to be) global level entity that aims to fuel
          businesses with creative and IT resources. Building products that are
          scalable and customized to fit into the legacy operations of clients
          is high priority.
          <br /> <br />
          SapMen C. also extends it's line of services to high potential
          start-ups, leveraging them with solutions to manage their entire
          work-cycle operations - online. Turning client's expectations into
          reality and excelling in it, is the all-time main point of focus.
          <br /> <br />
          With Creative Solutions in the fields of Digital Marketing, UI/UX,
          Web-Development and IT Solutions in the fields of ERP Software, HRM
          tools, Organization legacy software, and many more, SapMen C. aims to
          support people and businesses across the globe.
          <br /> <br />
          At SapMen C., Clientele priority is at all time high but what matters
          more is humans and their well-being which is valued more than paper
          and screens. Investing time (more than capital) in people who build,
          create and innovate is the ideology followed.
          <br /> <br />
          Every individual's objective at SapMen C. is only one: to
          conceptualize a new era of creative and consulting.
        </p>
        <div className="basis-2/6 md:h-[475px]">
          <img
            src="/images/meet.gif"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center py-8">
        <a href="#services">
          <ThemeButton content="Let's Talk Business" />
        </a>
      </div>
    </>
  );
}

export default About;

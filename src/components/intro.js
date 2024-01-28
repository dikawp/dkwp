import foto from "../images/IMG_7490 1.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Introduc = () => {

  const introDiv = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".foto", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: introDiv.current,
        start: "top 70%",
      },
    });

    gsap.from(".texted", {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: introDiv.current,
        start: "top 70%",
      },
    });
  });

  return (
    <>
      <h1 className="text-center text-xl pt-32">Intro</h1>
      <h1 className="text-center text-3xl text-red-600 font-bold">About Me</h1>
      <div ref={introDiv} className="mt-10 lg:flex justify-center">
        <div className="lg:w-1/3 mx-10 drop-shadow-xl">
          <img
            src={foto}
            alt="Profile"
            className="foto my-4 rounded-lg text-center"
          />
        </div>
        <div className="lg:w-1/3 flex flex-col justify-center mx-10">
          <h1 className="texted text-justify">
            Hello, My name is Dika, and I am an undergraduate student majoring
            in Telkom University Surabaya. I have consistently been learning
            about website development through various sources, including YouTube
            tutorials and participating in online bootcamps like dicoding.com.
          </h1>
          <h1 className="texted text-justify mt-3">
            I am actively involved in the CODER organization at IT Telkom
            Surabaya, where I attend workshops and contribute to various
            committees. I have also served as the secretary in the Web Developer
            Division for one term.
          </h1>
          <h1 className="texted text-justify mt-3">
            Currently, I have experience in creating website applications using
            the Laravel framework and React. I am committed to continuous
            self-improvement in the field of website development and aspire to
            make positive contributions to both the organization and the
            projects I am involved in.
          </h1>
          <a
            className="w-1/2 py-1 px-3 mt-5 text-center bg-red-800 text-lg font-semibold rounded-md text-white"
            href="../images/CV_Ramadika_Wijaya.pdf"
            download={"CV_Ramadika_Wijaya.pdf"}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

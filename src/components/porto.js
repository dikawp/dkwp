import { gn, inshanity, sitodo, gundam } from "../images/porto/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Porto = () => {
  const Portodiv = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.imgs', {
      x: -800,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: Portodiv.current,
        start: "top 70%",
      },
    });

    gsap.from(".capt", {
      x: 800,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: Portodiv.current,
        start: "top 70%",
      },
    });
  });

  return (
    <div className="mt-40 h-100">
      <h1 className="text-center text-xl pt-14">Portofolios</h1>
      <h1 className="text-center text-3xl text-red-600 font-bold">
        My Projects
      </h1>
      <div ref={Portodiv} className="mt-12 text-center justify-center">
        <div className=" w-5/6 m-auto">
          <figure className="xl:flex justify-center">
            <img
              src={gn}
              alt="Profile"
              className="imgs rounded-lg lg:w-5/6 xl:w-1/2 drop-shadow-xl"
              style={{ display: "inline-block" }}
            />
            <figcaption className="capt lg:mx-14 xl:ms-6 text-start my-2">
              <h1 className="text-xl lg:text-3xl font-bold">
                Gn Shoppu. <br /> B2C Mobile, UI Design
              </h1>
              <p className="text-lg font-normal my-5">
                "GnShoppu is a UI/UX concept design created for a mobile app
                that embraces the B2C (Business-to-Customers) Mobile Apps."
              </p>
              <div>
                <ul>
                  <li className="tech-item border-2 border-red-500 py-1 px-3">FIGMA</li>
                </ul>
              </div>
            </figcaption>
          </figure>

          <figure className="xl:flex justify-center mt-16">
            <img
              src={gundam}
              alt="Profile"
              className="imgs rounded-lg lg:w-5/6 xl:w-1/2 drop-shadow-xl"
              style={{ display: "inline-block" }}
            />
            <figcaption className="capt lg:mx-14 xl:ms-6 text-start my-2">
              <h1 className="text-xl lg:text-3xl font-bold">
                Bandai Namco. <br /> Slicing Landing Page, Website
              </h1>
              <p className="text-lg font-normal my-5">
                This website is the result of slicing the landing page of the
                Bandai Namco Company.
              </p>
              <div>
                <ul>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">HTML</li>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">CSS</li>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">
                    JAVASCRIPT
                  </li>
                </ul>
              </div>
            </figcaption>
          </figure>
          
          <figure className="xl:flex justify-center mt-16">
            <img
              src={sitodo}
              alt="Profile"
              className="imgs rounded-lg lg:w-5/6 xl:w-1/2 drop-shadow-xl"
              style={{ display: "inline-block" }}
            />
            <figcaption className="capt lg:mx-14 xl:ms-6 text-start my-2">
              <h1 className="text-xl lg:text-3xl font-bold">
                SiToDo. <br /> Task Management, Website
              </h1>
              <p className="text-lg font-normal my-5">
                SiTodo is a task management website where users can create
                workspaces and invite others to collaboratively manage tasks
                within a shared workspace."
              </p>
              <div>
                <ul>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">LARAVEL</li>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">BOOTSTRAP</li>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">SQL</li>
                </ul>
              </div>
            </figcaption>
          </figure>
          
          <figure className="xl:flex justify-center mt-16">
            <img
              src={inshanity}
              alt="Profile"
              className="imgs rounded-lg lg:w-5/6 xl:w-1/2 drop-shadow-xl"
              style={{ display: "inline-block" }}
            />
            <figcaption className=" capt lg:mx-14 xl:ms-6 text-start my-2">
              <h1 className="text-xl lg:text-3xl font-bold">
                inshanityGoods. <br /> B2C Furniture, Mobile Apps
              </h1>
              <p className="text-lg font-normal my-5">
                InshanityGoods is a B2C mobile application that sells furniture
                and has been integrated with Midtrans as its payment gateway
              </p>
              <div>
                <ul>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">
                    REACT NATIVE
                  </li>
                  <li className="tech-item border-2 border-red-500 py-1 px-3 mr-3">FIREBASE</li>
                </ul>
              </div>
            </figcaption>
          </figure>

          <div className="flex justify-between p-4 lg:p-8 mt-12 rounded-lg bg-white text-gray-500 dark:bg-slate-800 dark:text-white drop-shadow-xl">
            <div className="flex flex-col justify-center">
              <h1 className="text-md lg:text-xl font-bold ">More in Github</h1>
            </div>
            <div>
              <a
                className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center drop-shadow-md hover:bg-gray-200 focus:outline-none"
                href="https://github.com/dikawp"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="28px"
                  width="28px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span className="text-sm font-medium mx-2 text-gray-600">
                  dikawp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

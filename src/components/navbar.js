import React, { useEffect } from "react";

export const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className="bg-transparent bg-opacity-15 backdrop-blur-sm p-4 md:p-8 lg:px-20 fixed top-0 w-full z-10 border-b dark:border-slate-600">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">DKWP.</h1>

          <button onClick={toggleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

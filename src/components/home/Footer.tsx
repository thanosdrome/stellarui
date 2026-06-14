import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-dark-background text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1440px] px-[73px] pb-8 pt-16">
        {/* Top section with logo and links */}
        <div className="mb-16 flex items-start justify-between">
          {/* Logo and copyright */}
          <div className="animate-fade-in-up animate-delay-100 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full"
                style={{
                  background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`,
                }}
              >
                <img
                  className="scale-75"
                  alt="StellarUI Logo"
                  src="/stellar.png"
                  width={44}
                  height={44}
                />
              </div>
              <h2 className="text-lg font-bold text-white">StellarUI</h2>
            </div>

            {/* Copyright */}
            <p className="max-w-[300px] text-sm text-gray-70">
              © copyright StellarUI 2025. All rights reserved.
            </p>
            <p className="flex max-w-[300px] text-sm text-gray-70">
              Made with Lots of{" "}
              <img
                className="mt-[-15px] rotate-[0.542rad]"
                src="./coffee.svg"
                height={"505px"}
                width={"50px"}
                alt=""
              />{" "}
              by Shudhanshu.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {/* Pages */}
            <div className="animate-fade-in-up animate-delay-200 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-white">Pages</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Clients
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-white">Socials</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="animate-fade-in-up animate-delay-400 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-white">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Register */}
            <div className="animate-fade-in-up animate-delay-500 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-white">Register</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-70 transition-colors hover:text-white">
                    Forgot Password
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text - Bold and Thick */}
        <div className="animate-fade-in-scale animate-delay-600 relative flex justify-center">
          <h1
            className="pointer-events-none select-none bg-gradient-to-t from-[#292929] to-[#000000] bg-clip-text text-[13rem] leading-none tracking-wider"
            style={{
              color: "rgba(255, 255, 255, 0.02)",
              fontFamily: "Bricolage Grotesque, Helvetica",
              textTransform: "uppercase",
              fontWeight: "900",
              // textShadow: '0 0 20px rgba(255, 255, 255, 0.02)',
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
            }}
          >
            STELLAR UI
          </h1>
        </div>
      </div>
    </footer>
  );
};

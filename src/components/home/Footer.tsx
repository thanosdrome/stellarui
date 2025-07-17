import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-background text-white relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-[73px] pt-16 pb-8">
        {/* Top section with logo and links */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-6 animate-fade-in-up animate-delay-100">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div 
                className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, #925C40 0%, #cd5a25 100%)`
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
              <h2 className="text-white font-bold text-lg">StellarUI</h2> 
            </div>
            
            {/* Copyright */}
            <p className="text-gray-70 text-sm max-w-[300px]">
              © copyright StellarUI 2025. All rights reserved.
            </p>
            <p className="flex text-gray-70 text-sm max-w-[300px]">
              Made with Lots of <img className="mt-[-15px] rotate-[0.542rad]" src="./coffee.svg" height={"505px"} width={"50px"} alt="" /> by Shudhanshu.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {/* Pages */}
            <div className="flex flex-col gap-4 animate-fade-in-up animate-delay-200">
              <h3 className="text-white font-semibold text-base">Pages</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">All Products</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Studio</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Clients</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4 animate-fade-in-up animate-delay-300">
              <h3 className="text-white font-semibold text-base">Socials</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Instagram</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 animate-fade-in-up animate-delay-400">
              <h3 className="text-white font-semibold text-base">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Register */}
            <div className="flex flex-col gap-4 animate-fade-in-up animate-delay-500">
              <h3 className="text-white font-semibold text-base">Register</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Sign Up</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Login</a></li>
                <li><a href="#" className="text-gray-70 hover:text-white transition-colors text-sm">Forgot Password</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large STELLAR UI text - Bold and Thick */}
        <div className="relative flex justify-center animate-fade-in-scale animate-delay-600">
          <h1 
            className="text-[13rem] bg-clip-text bg-gradient-to-t from-[#292929] to-[#000000] leading-none tracking-wider select-none pointer-events-none"
            style={{
              color: 'rgba(255, 255, 255, 0.02)',
              fontFamily: 'Bricolage Grotesque, Helvetica',
              textTransform: 'uppercase',
              fontWeight: '900', 
              // textShadow: '0 0 20px rgba(255, 255, 255, 0.02)',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)', 
            }}
          >
            STELLAR UI
          </h1>
        </div>
      </div>
    </footer>
  );
};
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WaitlistModal } from "@/components/home/WaitlistModal";
import { Footer } from "@/components/home/Footer";
import { PointerTracker } from "@/components/home/PointerTracker";
import { Link } from "react-router-dom";
import HeroShowcase from "@/components/home/HeroShowcase";

export const HomePage = (): JSX.Element => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  // const menuItems = [  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <PointerTracker />
      <div
        className="flex flex-row justify-center w-full"
        style={{
          backgroundImage: "url('/footer-gradient.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--dark-background)",
        }}
      >
        <div className="overflow-hidden w-[1440px] h-[1024px]">
          <div className="relative h-[1235px]">
            {/* Circular decorative elements - fade in with scale */}
            <div className="absolute w-[980px] h-[980px] top-[70px] left-[230px] animate-fade-in-scale animate-delay-300">
              <div className="relative w-[1008px] h-[982px] -top-px left-[-15px]">
                <div className="absolute w-[982px] h-[982px] top-0 left-3.5 rounded-[491px] circle-light" />

                <img
                  className="absolute w-[99px] h-[297px] top-[225px] left-0 animate-fade-in-left animate-delay-500"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="absolute w-[71px] h-[269px] top-[239px] left-3.5 animate-fade-in-left animate-delay-600"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="absolute w-[156px] h-[287px] top-[146px] left-[852px] animate-fade-in-right animate-delay-500"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="absolute w-[119px] h-[252px] top-[165px] left-[871px] animate-fade-in-right animate-delay-600"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="flex flex-col w-[1296px] items-center gap-[60px] absolute top-[186px] left-[73px] overflow-hidden">
              <div className="absolute w-[886px] h-[886px] top-[284px] left-[205px] rounded-[443px] border border-solid border-accent-dark-brown shadow-[inset_0px_0px_250px_160px_rgba(var(--dark-background-rgb),0.3),0px_-6px_114px_10px_rgba(var(--glow-light-rgb),0.05)] animate-fade-in-scale animate-delay-400">
                <img
                  className="absolute w-[728px] h-[170px] top-[11px] left-[78px] animate-fade-in-down animate-delay-700"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="flex flex-col w-[988px] items-center gap-6 relative flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                    {/* Feature badge */}
                    <Badge className="inline-flex items-center justify-center gap-3 px-3.5 py-2 relative flex-[0_0_auto] rounded-[100px] border border-solid border-accent-dark-brown shadow-[inset_0px_0px_22px_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)] animate-fade-in-up animate-delay-200">
                      {/* <div className="relative w-6 h-6">
                        <div className="relative h-6">
                          <img
                            className="absolute w-[50px] h-[50px]"
                            alt="Icon"
                            src=""
                          /> 
                        </div>
                      </div> */}

                      <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-97 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-light-95 text-[58px] text-center tracking-[0] leading-[69.6px] animate-fade-in-up animate-delay-300">
                        Revolutionize Your Design <br />
                        With Powerful UI Elements
                      </h1>

                      <p className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-base text-center tracking-[0] leading-6 animate-fade-in-up animate-delay-400">
                        Transform your UI workflow with StellarUI—where sleek design <br />
                       meets blazing-fast development.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/docs">
                  <Button
                    className="h-[52px] px-6 py-4 relative rounded-[100px] animate-fade-in-up animate-delay-500"
                    style={{
                      background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                    }}
                  >
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                      View Documentation
                    </span>
                  </Button>
                  </Link>
                </div>

                {/* Companies using the product */}
                <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded animate-fade-in-up animate-delay-600">
                  <img
                    className="relative w-5 h-5"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-gray-90 text-[15px] tracking-[0] leading-[15px]">
                    <span className="font-medium text-[#92929f] leading-[22.5px]">
                      Planned to be integrated in 
                    </span>

                    <span className="font-medium text-zinc-200 leading-[22.5px]">
                      {" "}
                      50+ Sites
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <Card
                className="flex flex-col h-[586px] items-start gap-[13.87px] p-5 relative self-stretch w-full rounded-[22px] border-solid border-black backdrop-blur-[23.58px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.58px)_brightness(100%)] animate-fade-in-up animate-delay-700"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`,
                }}
              >
                <CardContent className="p-0 w-full h-full">
                  <div className="absolute w-[720px] h-[38px] top-[15px] left-72">
                    <div className="relative h-[38px]">
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg-[#E0A784] rounded-[19px/360px] rotate-90 blur-[137px]" />
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg[#8A5B40] rounded-[19px/360px] rotate-90 blur-[42px]" />
                      <div className="absolute w-[38px] h-[720px] top-[-341px] left-[341px] bg-[#C26B3A] rounded-[19px/360px] rotate-90 blur-[92px]" />
                    </div>
                  </div>

                  <img
                    className="w-full h-full object-cover rounded-[18px] animate-fade-in-scale animate-delay-800"
                    alt="Image"
                    src="/docs.png"
                  />

                  <div
                    className="absolute w-[1337px] h-[213px] top-[373px] -left-2"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="flex flex-col w-[893px] items-start gap-2.5 pl-4 pr-3 py-2.5 absolute top-[30px] left-[274px] rounded-[119.38px] border-none backdrop-blur-[126.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(126.3px)_brightness(100%)] animate-fade-in-down"
              style={{
                background: `linear-gradient(90deg, var(--dark-background) 0%, var(--accent-dark-brown) 100%)`,
                borderRadius: "50px",
                position: "relative",
                height: "75px",
                overflow: "hidden",
              }}
            >
              {/* Conic gradient */}
              <span
                style={{
                  content: "''",
                  background: `conic-gradient(transparent 270deg, var(--glow-light), transparent)`,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  aspectRatio: "1",
                  width: "100%",
                  animation: "rotate 2s linear infinite",
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
              {/* Overlay */}
              <span
                style={{
                  content: "''",
                  background: "inherit",
                  borderRadius: "inherit",
                  position: "absolute",
                  inset: "3px",
                  height: "calc(100% - 6px)",
                  width: "calc(100% - 6px)",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />
              <CardContent
                className="p-0 w-full"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  {/* Logo */}
                  <div className="relative w-[120px] h-11 animate-fade-in-left animate-delay-100">
                    <div
                      className="absolute w-11 h-11 top-0 left-0 rounded-[100px] overflow-hidden"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <img
                        className="absolute scale-75 left-0"
                        alt="Abstract"
                        src="/stellar.png"
                        width={100}
                        height={100}
                      />
                    </div>

                    <h1 className="absolute w-[67px] h-[15px] top-[10px] left-[51px] text-white font-bold">
                      StellarUI
                    </h1>
                  </div>

                  {/* Right side actions */}
                  <div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto] animate-fade-in-right animate-delay-100">
                    <img
                      className="relative w-6 h-6"
                      alt="Icon container"
                      src="/icon-container-1.svg"
                    />

                    <Button
                      onClick={() => setIsWaitlistModalOpen(true)}
                      className="h-[52px] px-6 py-4 relative rounded-[100px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-semibold text-gray-90 text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                        Join the waitlist
                      </span>
                    </Button>
                  </div>

                  {/* Navigation menu */}
                  <nav className="inline-flex items-center gap-6 absolute top-[15px] left-[187px] animate-fade-in-up animate-delay-200">
                   
                    {/* {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-medium text-${
                          item.active ? "white" : "gray-70"
                        } text-base tracking-[0] leading-[22.4px] whitespace-nowrap transition-colors duration-200 hover:text-white`}
                      >
                        {item.label}
                      </a>
                    ))} */}
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Components Display Section*/ }
      <div className="w-full">
        <HeroShowcase/>
        </div>              

      {/* Footer */}
      <div className="animate-fade-in-up animate-delay-800">
        <Footer />
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
};
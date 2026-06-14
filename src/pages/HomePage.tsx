import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WaitlistModal } from "@/components/home/WaitlistModal";
import { Footer } from "@/components/home/Footer";
import { PointerTracker } from "@/components/home/PointerTracker";
import { Link } from "react-router-dom";
import HeroShowcase from "@/components/home/HeroShowcase";
import { XRayCard } from "@/components/library";

export const HomePage = (): JSX.Element => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  // const menuItems = [  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <PointerTracker />
      <div
        className="flex w-full flex-row justify-center"
        style={{
          backgroundImage: "url('/footer-gradient.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--dark-background)",
        }}
      >
        <div className="h-[1024px] w-[1440px] overflow-hidden">
          <div className="relative h-[1235px]">
            {/* Circular decorative elements - fade in with scale */}
            <div className="animate-fade-in-scale animate-delay-300 absolute left-[230px] top-[70px] h-[980px] w-[980px]">
              <div className="relative -top-px left-[-15px] h-[982px] w-[1008px]">
                <div className="circle-light absolute left-3.5 top-0 h-[982px] w-[982px] rounded-[491px]" />

                <img
                  className="animate-fade-in-left animate-delay-500 absolute left-0 top-[225px] h-[297px] w-[99px]"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="animate-fade-in-left animate-delay-600 absolute left-3.5 top-[239px] h-[269px] w-[71px]"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="animate-fade-in-right animate-delay-500 absolute left-[852px] top-[146px] h-[287px] w-[156px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />

                <img
                  className="animate-fade-in-right animate-delay-600 absolute left-[871px] top-[165px] h-[252px] w-[119px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>

            {/* Main content section */}
            <div className="absolute left-[73px] top-[186px] flex w-[1296px] flex-col items-center gap-[60px] overflow-hidden">
              <div className="animate-fade-in-scale animate-delay-400 absolute left-[205px] top-[284px] h-[886px] w-[886px] rounded-[443px] border border-solid border-accent-dark-brown shadow-[inset_0px_0px_250px_160px_rgba(var(--dark-background-rgb),0.3),0px_-6px_114px_10px_rgba(var(--glow-light-rgb),0.05)]">
                <img
                  className="animate-fade-in-down animate-delay-700 absolute left-[78px] top-[11px] h-[170px] w-[728px]"
                  alt="Partical abstract"
                  src="/partical-abstract-design.svg"
                />
              </div>

              {/* Hero content */}
              <div className="relative flex w-[988px] flex-[0_0_auto] flex-col items-center gap-6">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-10 self-stretch">
                  <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-5 self-stretch">
                    {/* Feature badge */}
                    <Badge className="animate-fade-in-up animate-delay-200 relative inline-flex flex-[0_0_auto] items-center justify-center gap-3 rounded-[100px] border border-solid border-accent-dark-brown px-3.5 py-2 shadow-[inset_0px_0px_22px_rgba(var(--accent-orange-dark-rgb),0.4)] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85%)]">
                      {/* <div className="relative w-6 h-6">
                        <div className="relative h-6">
                          <img
                            className="absolute w-[50px] h-[50px]"
                            alt="Icon"
                            src=""
                          /> 
                        </div>
                      </div> */}

                      <div className="relative w-fit whitespace-nowrap text-[15px] font-medium leading-[normal] tracking-[0] text-gray-97 [font-family:'Instrument_Sans',Helvetica]">
                        Introducing Our Latest Features
                      </div>
                    </Badge>

                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-4 self-stretch">
                      <h1 className="animate-fade-in-up animate-delay-300 relative mt-[-1.00px] self-stretch text-center text-[58px] font-bold leading-[69.6px] tracking-[0] text-light-95 [font-family:'Bricolage_Grotesque',Helvetica]">
                        Revolutionize Your Design <br />
                        With Powerful UI Elements
                      </h1>

                      <p className="animate-fade-in-up animate-delay-400 relative self-stretch text-center text-base font-medium leading-6 tracking-[0] text-gray-70 [font-family:'Instrument_Sans',Helvetica]">
                        Transform your UI workflow with StellarUI—where sleek design <br />
                        meets blazing-fast development.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/docs">
                    <Button
                      className="animate-fade-in-up animate-delay-500 relative h-[52px] rounded-[100px] px-6 py-4"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[17px] font-semibold leading-[20.4px] tracking-[0] text-gray-90 [font-family:'Instrument_Sans',Helvetica]">
                        View Documentation
                      </span>
                    </Button>
                  </Link>
                </div>

                {/* Companies using the product */}
                <div className="animate-fade-in-up animate-delay-600 relative inline-flex flex-[0_0_auto] items-center justify-center gap-1.5 rounded">
                  <img
                    className="relative h-5 w-5"
                    alt="Icon container"
                    src="/icon-container.svg"
                  />

                  <div className="relative w-fit text-[15px] font-normal leading-[15px] tracking-[0] text-gray-90 [font-family:'Instrument_Sans',Helvetica]">
                    <span className="font-medium leading-[22.5px] text-[#92929f]">
                      Planned to be integrated in
                    </span>

                    <span className="font-medium leading-[22.5px] text-neutral-200">
                      {" "}
                      50+ Sites
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <Card
                className="animate-fade-in-up animate-delay-700 relative flex h-[586px] w-full flex-col items-start gap-[13.87px] self-stretch rounded-[22px] border-solid border-black p-5 backdrop-blur-[23.58px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.58px)_brightness(100%)]"
                style={{
                  background: `radial-gradient(circle,rgba(194, 107, 58, 1) 0%, rgba(67, 58, 59, 1) 35%, rgba(10, 10, 10, 1) 100%)`,
                }}
              >
                <CardContent className="h-full w-full p-0">
                  <div className="absolute left-72 top-[15px] h-[38px] w-[720px]">
                    <div className="relative h-[38px]">
                      <div className="absolute left-[341px] top-[-341px] h-[720px] w-[38px] rotate-90 rounded-[19px/360px] bg-[#E0A784] blur-[137px]" />
                      <div className="bg[#8A5B40] absolute left-[341px] top-[-341px] h-[720px] w-[38px] rotate-90 rounded-[19px/360px] blur-[42px]" />
                      <div className="absolute left-[341px] top-[-341px] h-[720px] w-[38px] rotate-90 rounded-[19px/360px] bg-[#C26B3A] blur-[92px]" />
                    </div>
                  </div>

                  <XRayCard
                    baseSrc="/download.avif"
                    revealSrc="/download.webp"
                    radius={250}
                    healDelay={1}
                    lag={4}
                    alt="StellarUI preview"
                    className="animate-fade-in-scale animate-delay-800 h-full w-full rounded-[18px]"
                  />

                  <div
                    className="absolute -left-2 top-[373px] h-[213px] w-[1337px]"
                    style={{
                      background: `linear-gradient(180deg, rgba(var(--dark-background-rgb),0) 0%, rgba(var(--dark-background-rgb),1) 81%)`,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Navigation bar */}
            <Card
              className="animate-fade-in-down absolute left-[274px] top-[30px] flex w-[893px] flex-col items-start gap-2.5 rounded-[119.38px] border-none py-2.5 pl-4 pr-3 backdrop-blur-[126.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(126.3px)_brightness(100%)]"
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
              <CardContent className="w-full p-0" style={{ position: "relative", zIndex: 2 }}>
                <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
                  {/* Logo */}
                  <div className="animate-fade-in-left animate-delay-100 relative h-11 w-[120px]">
                    <div
                      className="absolute left-0 top-0 h-11 w-11 overflow-hidden rounded-[100px]"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <img
                        className="absolute left-0 scale-75"
                        alt="Abstract"
                        src="/stellar.png"
                        width={100}
                        height={100}
                      />
                    </div>

                    <h1 className="absolute left-[51px] top-[10px] h-[15px] w-[67px] font-bold text-white">
                      StellarUI
                    </h1>
                  </div>

                  {/* Right side actions */}
                  <div className="animate-fade-in-right animate-delay-100 relative inline-flex flex-[0_0_auto] items-center justify-end gap-4">
                    <img
                      className="relative h-6 w-6"
                      alt="Icon container"
                      src="/icon-container-1.svg"
                    />

                    <Button
                      onClick={() => setIsWaitlistModalOpen(true)}
                      className="relative h-[52px] rounded-[100px] px-6 py-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(180deg, #925C40  0%, #cd5a25 100%)`,
                      }}
                    >
                      <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[17px] font-semibold leading-[20.4px] tracking-[0] text-gray-90 [font-family:'Instrument_Sans',Helvetica]">
                        Join the waitlist
                      </span>
                    </Button>
                  </div>

                  {/* Navigation menu */}
                  <nav className="animate-fade-in-up animate-delay-200 absolute left-[187px] top-[15px] inline-flex items-center gap-6">
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
      {/* Components Display Section*/}
      <div className="w-full">
        <HeroShowcase />
      </div>

      {/* Footer */}
      <div className="animate-fade-in-up animate-delay-800">
        <Footer />
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </div>
  );
};

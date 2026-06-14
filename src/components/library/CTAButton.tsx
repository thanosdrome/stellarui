import React from "react";
import { ArrowRight } from "lucide-react";
interface CTAButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const RINGS = [0, 1, 2, 3, 4, 5];

export const CTAButton: React.FC<CTAButtonProps> = ({
  label = "Get Started",
  onClick,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex cursor-pointer items-center border-none bg-transparent p-0 transition-transform ${className}`}
    >
      <span
        className="relative flex items-center gap-4 overflow-visible rounded-full bg-[#222222] px-4 py-3 pr-7 group-active:scale-95 group-active:shadow group-active:shadow-[#cd5a25]"
        style={{ border: "1.5px solid #cd5a25" }}
      >
        {RINGS.map((i) => (
          <span
            key={i}
            className="pointer-events-none absolute -inset-0.5 animate-cta-echo rounded-full"
            style={{ border: "1.5px solid #cd5a25", animationDelay: `${i * 0.5}s` }}
          />
        ))}

        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#cd5a25] transition-transform group-hover:scale-105">
          {icon ?? <ArrowRight className="text-[#212121]" size={20} />}
        </span>
        <span className="relative z-10 pr-1 text-lg font-semibold tracking-wide text-white">
          {label}
        </span>
      </span>
    </button>
  );
};

export const CTAButtonExample = () => <CTAButton label="Get Started" />;

export default CTAButton;

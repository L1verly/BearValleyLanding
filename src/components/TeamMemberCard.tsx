import { useEffect, useRef, useState } from "react";
import { type TeamMemberCardType } from "../types/types.ts";

export const TeamMemberCard = ({
  imageAstro,
  name,
  title,
  description,
}: TeamMemberCardType) => {
  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator?.msMaxTouchPoints > 0;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const handleWindowChange = () => {
    setIsMobile(window.innerWidth < 640);
  };
  const [isUncovered, setIsUncovered] = useState(false);
  const handleClick = () => {
    setIsUncovered(true);
  };
  const teamCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isTouchDevice) window.addEventListener("resize", handleWindowChange);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        teamCardRef.current &&
        !teamCardRef.current.contains(event.target as Node)
      ) {
        setIsUncovered(false);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    };

    if (isUncovered) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isUncovered]);
  return (
    <div
      ref={teamCardRef}
      className={
        isMobile || isTouchDevice
          ? "bg-white rounded-2xl shadow-lg overflow-hidden w-70 transition duration-700 " +
            (isUncovered && "scale-105 -translate-y-5")
          : "group bg-white rounded-2xl shadow-lg overflow-hidden w-70 transition duration-700 hover:scale-103 hover:-translate-y-5"
      }
    >
      <slot>{imageAstro}</slot>
      <div className="flex flex-col gap-2.5 mb-8 px-6 my-4 text-center font-sans">
        <h3 className="text-xl tracking-wide">{name}</h3>
        <h3 className="text-base font-bold uppercase tracking-wider text-(--color-accent)">
          {title}
        </h3>
        <div
          className={
            isMobile || isTouchDevice
              ? "text-sm text-gray-500 line-clamp-2 max-h-12 transition-all duration-700 ease-in-out " +
                (isUncovered && "line-clamp-none max-h-100")
              : "text-sm text-gray-500 line-clamp-2 max-h-12 transition-all duration-700 ease-in-out group-hover:line-clamp-none group-hover:max-h-100"
          }
        >
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      {(isMobile || isTouchDevice) && !isUncovered && (
        <span
          onClick={handleClick}
          className="text-xs text-gray-700 justify-center flex pb-4 cursor-pointer"
        >
          Читати далі...
        </span>
      )}
    </div>
  );
};

export default TeamMemberCard;

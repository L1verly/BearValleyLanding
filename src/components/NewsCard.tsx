import { useRef, useState, useEffect } from "react";
import { type NewsCardType } from "../types/types.ts";

const NewsCard = ({
  description,
  image,
  title,
  link,
  ...otherProps
}: NewsCardType) => {
  console.log(description, image, title, link);
  const [isUncovered, setIsUncovered] = useState(false);
  const handleClick = () => {
    setIsUncovered(true);
  };
  const newsCardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        newsCardRef.current &&
        !newsCardRef.current.contains(event.target as Node)
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
      className={
        "group bg-white rounded-xl shadow-lg overflow-hidden transition duration-700 " +
        (isUncovered && "scale-105 -translate-y-10 z-500")
      }
      {...otherProps}
    >
      <a
        href={link ?? ""}
        className={!link ? "select-none pointer-events-none" : ""}
        target="_blank"
        title={"Пост у Facebook: " + title}
      >
        <img
          className={
            "object-cover object-center w-full max-h-64 transition-all duration-700 ease-in-out hover:shadow-2xl active:shadow-2xl shadow-green-700 hover:scale-101 active:scale-101 " +
            (isUncovered && "max-h-140")
          }
          src={image.src}
          alt={title}
        />
      </a>

      <div className="p-8 !pt-5">
        <h3 className="text-center text-lg font-semibold pb-3">{title}</h3>
        <article
          ref={newsCardRef}
          className={
            "text-sm text-gray-500 line-clamp-2 max-h-12 transition-all duration-700 ease-in-out " +
            (isUncovered && "line-clamp-none max-h-100 hover:text-gray-700")
          }
        >
          {typeof description === "string"
            ? description
            : description.map((line, i) => <p key={i}>{line}</p>)}
        </article>
      </div>
      {!isUncovered && (
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
export default NewsCard;

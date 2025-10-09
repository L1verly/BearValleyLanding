import { type NewsCardType } from "../types/types.ts";

const NewsCard = ({
  description,
  image,
  title,
  link,
  ...otherProps
}: NewsCardType) => {
  console.log(description, image, title, link);
  return (
    <a href={link} className={link && "select-none"} target="_blank">
      <div
        onClick={() => {}}
        className="group bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 active:scale-105 hover:-translate-y-10 active:-translate-y-10 transition-all duration-700 hover:z-500"
        {...otherProps}
      >
        <img
          className=" object-cover object-center w-full max-h-64 group-hover:max-h-140 group-active:max-h-140 transition-all duration-700 ease-in-out"
          src={image.src}
          alt={title}
        />
        <div className="p-8">
          <h3 className="text-center text-lg font-semibold pb-3">{title}</h3>
          <article className="text-sm text-gray-500 line-clamp-2 group-hover:line-clamp-none group-active:line-clamp-none max-h-12 group-hover:max-h-100 group-active:max-h-100 transition-all duration-700 ease-in-out">
            {typeof description === "string"
              ? description
              : description.map((line, i) => <p key={i}>{line}</p>)}
          </article>
        </div>
      </div>
    </a>
  );
};
export default NewsCard;

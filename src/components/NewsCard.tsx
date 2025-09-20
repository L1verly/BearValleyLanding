import { type NewsCardType } from "../types/types.ts";

const NewsCard = (newsItem: NewsCardType) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 active:scale-105 hover:translate-y-3 active:translate-y-3 transition duration-500 hover:z-500"
      {...newsItem.otherProps}
    >
      <img
        className="object-cover object-center w-full max-h-64 group-hover:max-h-140 group-active:max-h-140 transition-all duration-700 ease-in-out"
        src={newsItem.image.src}
        alt={newsItem.title}
      />
      <div className="p-8">
        <h3 className="text-center text-lg font-semibold">{newsItem.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 group-active:line-clamp-none group-hover:line-clamp-none max-h-12 group-hover:max-h-100 group-active:max-h-60 transition-all duration-500 ease-in-out">
          {newsItem.description}
        </p>
      </div>
    </div>
  );
};
export default NewsCard;

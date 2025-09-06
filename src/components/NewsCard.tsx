import { type NewsCardType } from "../types/types.ts";

const NewsCard = (newsItem: NewsCardType) => {
  return (
    <div
      className="group shrink-0 bg-white rounded-2xl shadow-md overflow-hidden hover:translate-y-3 hover:scale-105 active:scale-105 active:translate-y-3 transition duration-500 hover:z-500"
      {...newsItem.otherProps}
    >
      <img
        className="max-w-full max-h-full object-cover"
        src={newsItem.image.src}
        alt={newsItem.title}
      />
      <div className="p-8">
        <h3 className="text-center text-lg font-semibold">{newsItem.title}</h3>
        <p className="text-sm text-gray-500 truncate group-active:whitespace-normal group-hover:whitespace-normal max-h-12 group-hover:max-h-100 group-active:max-h-60 transition-all duration-500 ease-in-out">
          {newsItem.description}
        </p>
      </div>
    </div>
  );
};
export default NewsCard;

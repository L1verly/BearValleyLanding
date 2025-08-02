import { type NewsItemType } from "../types/types.ts";

const NewsCard = (newsItem: NewsItemType) => {
  return (
    <div className="shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:translate-y-0.5 hover:scale-105 transition duration-500">
      <img
        className="max-w-full max-h-full object-cover"
        src={newsItem.image.src}
        alt={newsItem.title}
      />
      <div className="p-8">
        <h3 className="text-center text-lg font-semibold">{newsItem.title}</h3>
        <p className="text-sm text-gray-600">{newsItem.description}</p>
      </div>
    </div>
  );
};
export default NewsCard;

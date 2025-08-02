import { useState } from "react";
import { ArrowRight, ArrowLeft } from "./Svg.tsx";
import { type SliderProps } from "../types/types.ts";
import NewsItem from "./NewsCard.tsx";

export default function NewsCarousel(props: { news: SliderProps }) {
  // const visibleCount = 3;

  const { news } = props;
  // const [current, setCurrent] = useState<SliderProps>(
  //   news.slice(0, visibleCount)
  // );
  // const handlePrev = () => {
  //   const isFirstSlide = current[0].id === 0;
  //   const newIndexes = isFirstSlide
  //     ? current
  //     : news.slice(current[0].id - 1, current[2].id);
  //   setCurrent(newIndexes);
  // };

  // const handleNext = () => {
  //   const isLastSlide = current[2].id === news.length - 1;
  //   const newIndexes = isLastSlide
  //     ? current
  //     : news.slice(current[0].id + 1, current[2].id + 2);
  //   setCurrent(newIndexes);
  // };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, news.length - visibleCount));
  };

  const current = news.slice(startIndex, startIndex + visibleCount);

  // console.log("current", current);
  console.log("news", news);

  return (
    <div className="relative w-full flex max-w-7xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute size-10 -left-20 top-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 ml-5"
      >
        <ArrowLeft />
      </button>

      {/* Carousel Track */}
      <div className="flex overflow-hidden">
        <div
          className="flex w-full gap-10 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(current[0].id / visibleCount) * 100}%)`,
          }}
        >
          {current.map((i, idx) => (
            <div
              key={i.id}
              className={`${current[idx] ? "" : ""} duration-500 transition`}
            >
              <NewsItem
                image={i.image}
                title={i.title}
                description={i.description}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Items */}

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute size-10 -right-20 top-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 mr-5"
      >
        <ArrowRight />
      </button>
    </div>
  );
}

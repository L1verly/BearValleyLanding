import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "./Svg.tsx";
import { type News } from "../types/types.ts";

export default function NewsCarousel(props: { news: News }) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const news = props.news;
  const total = news.length;
  console.log(`Props: ${props},News: ${news}, News length: ${total}`);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % total);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [total]);

  function prev() {
    setCurrent((prev) => (prev - 1 + total) % total);
  }
  function next() {
    setCurrent((prev) => (prev + 1) % total);
  }

  // For infinite loop effect
  const displayNews = news.concat(news.slice(0, visibleCount));
  const styles = { transform: `translateX(-${(100 / 3) * current}%)` };
  return (
    <div className="flex items-center">
      <button className="carousel-btn" onClick={prev}>
        <div className="p-2">
          <ArrowLeft />
        </div>
      </button>
      <div
        className="flex flex-row w-full overflow-x-hidden animate-slide-left"
        style={styles}
      >
        {displayNews.map((item, idx) => (
          <div
            className="news-item max-w-1/3"
            // style={{ minWidth: "30%" }}
            key={idx}
          >
            <img src={item.image.src} alt={item.title} />
            <div className="news-content">
              <div className="news-title">{item.title}</div>
              <div className="news-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn" onClick={next}>
        <div className="p-2">
          <ArrowRight />
        </div>
      </button>
    </div>
  );
}

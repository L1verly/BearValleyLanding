import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "./Svg.tsx";

export default function NewsCarousel({ news }) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const total = news.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

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
    <div className="flex">
      <div className="flex flex-row" style={styles}>
        <button className="carousel-btn" onClick={prev}>
          <ArrowLeft />
        </button>
        {displayNews.map((item, idx) => (
          <div className="news-item" style={{ minWidth: "30%" }} key={idx}>
            <img
              //   class="news-image max-w-40"
              src={item.image}
              alt={item.title}
            />
            <div className="news-content">
              <div className="news-title">{item.title}</div>
              <div className="news-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn" onClick={next}>
        <ArrowRight />
      </button>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

import { ArrowRightSVG, ArrowLeftSVG } from "./Svg.tsx";
import { type SliderProps } from "../types/types.ts";
import NewsCard from "./NewsCard.tsx";
import Slider from "react-slick";

const RightArrow = ({ style, className, onClick }: any) => (
  <button
    onClick={onClick}
    className={
      "justify-center items-center select-none size-11! bg-white rounded-full shadow-xl! hover:bg-gray-200! transition-colors duration-400" +
      className
    }
    title="Slide right"
    aria-label="slide-right"
    style={{ ...style }}
  >
    <ArrowRightSVG className={"size-5 m-auto pl-1"} />
  </button>
);

const LeftArrow = ({ style, className, onClick }: any) => (
  <button
    onClick={onClick}
    className={
      "justify-center items-center select-none size-11! bg-white rounded-full shadow-lg! hover:bg-gray-200! transition-colors duration-400" +
      className
    }
    title="Slide left"
    aria-label="slide-left"
    style={{ ...style }}
  >
    <ArrowLeftSVG className={"size-5 m-auto pr-1"} />
  </button>
);

export default function NewsSlider(props: { news: SliderProps }) {
  const news = props.news;
  const sliderRef = useRef<Slider>(null);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  // Effect to update slidesToShow on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowArrows(true);
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setShowArrows(true);
        setSlidesToShow(2);
      } else {
        setShowArrows(false);
        setSlidesToShow(1);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: showArrows,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <div className="sm:w-10/12 w-full 2xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {news.map((i, index) => (
            <div key={index}>
              <NewsCard {...i} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

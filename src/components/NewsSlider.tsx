import { useEffect, useRef, useState, useLayoutEffect } from "react";

import { ArrowRightSVG, ArrowLeftSVG } from "./Svg.tsx";
import { type SliderProps } from "../types/types.ts";
import NewsCard from "./NewsCard.tsx";
import Slider from "react-slick";

const RigthArrow = ({ style, className, onClick }: any) => (
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

export default function NewsCarousel(props: { news: SliderProps }) {
  const news = props.news;
  const sliderRef = useRef<Slider>(null);
  const [sliderHeight, setSliderHeight] = useState<number>(0);

  // Function to calculate adaptive height based on visible slides
  const multiSlideAdaptiveHeight = () => {
    if (!sliderRef.current) return;

    setTimeout(() => {
      const sliderElement = sliderRef.current?.innerSlider?.list;
      if (!sliderElement) return;

      const activeSlides = sliderElement.querySelectorAll(".slick-active");
      let tallestSlide = 0;

      activeSlides.forEach((slide: Element) => {
        const slideHeight = (slide as HTMLElement).offsetHeight;
        if (slideHeight > tallestSlide) {
          tallestSlide = slideHeight;
        }
      });

      setSliderHeight(tallestSlide);
    }, 50);
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useLayoutEffect(() => {
    if (!mounted) return;
    const r = sliderRef.current as any;
    // Call Slick’s internal handler (present at runtime)
    r?.innerSlider?.onWindowResized?.();
    // Also dispatch a resize event for good measure
    window.dispatchEvent(new Event("resize"));
    // Nudge a render pass
    r?.slickGoTo?.(0, true);
  }, [mounted]);
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      multiSlideAdaptiveHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // up to tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // up to mobile
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    nextArrow: <RigthArrow />,
    prevArrow: <LeftArrow />,
    onInit: () => multiSlideAdaptiveHeight(),
    onReInit: () => multiSlideAdaptiveHeight(),
    beforeChange: () => multiSlideAdaptiveHeight(),
    afterChange: () => multiSlideAdaptiveHeight(),
  };
  return (
    <div className="sm:w-10/12 w-full 2xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
      <style>
        {`
          .slick-list {
            transition: height 0.5s ease !important;
            height: ${sliderHeight}px !important;
          }
        `}
      </style>
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {news.map((i, index) => (
            <div key={index}>
              <NewsCard
                image={i.image}
                title={i.title}
                description={i.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

import { ArrowRightSVG, ArrowLeftSVG } from "./Svg.tsx";
import { type SliderProps } from "../types/types.ts";
import NewsCard from "./NewsCard.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// <div className="bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center">
//   {/* The SVG component is centered using flexbox */}
//   <YourSVGComponent className="w-6 h-6" />
// </div>

// Add for mobile 1 news per slide
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

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      multiSlideAdaptiveHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const visibleCount = 3;
  // const screenWidth = window.innerWidth;
  // const { news } = props;
  // // const [current, setCurrent] = useState<SliderProps>(
  // //   news.slice(0, visibleCount)
  // // );
  // // const handlePrev = () => {
  // //   const isFirstSlide = current[0].id === 0;
  // //   const newIndexes = isFirstSlide
  // //     ? current
  // //     : news.slice(current[0].id - 1, current[2].id);
  // //   setCurrent(newIndexes);
  // // };

  // // const handleNext = () => {
  // //   const isLastSlide = current[2].id === news.length - 1;
  // //   const newIndexes = isLastSlide
  // //     ? current
  // //     : news.slice(current[0].id + 1, current[2].id + 2);
  // //   setCurrent(newIndexes);
  // // };
  // const maxScrollWidth = useRef(0);
  // const slider = useRef(null);

  // const [startIndex, setStartIndex] = useState(0);
  // const visibleCount = screenWidth > 1460 ? 3 : 2;

  // const handlePrev = () => {
  //   setStartIndex((prev) => Math.max(prev - 1, 0));
  // };

  // // const handleNext = () => {
  // //   setStartIndex((prev) => Math.min(prev + 1, news.length - visibleCount));
  // // };

  // // const handleNext = () => {
  // //   if (
  // //     slider.current !== null &&
  // //     slider.current.offsetWidth * startIndex <= maxScrollWidth.current
  // //   ) {
  // //     setStartIndex((prev) => prev + 1);
  // //   }
  // // };

  // const visibleSlides = news.slice(startIndex, startIndex + visibleCount);

  // // console.log(((1 / visibleCount) * (screenWidth - 100)).toString());
  // // console.log("current", current);
  // // console.log("news", news);

  // // return (
  // //   <div className="relative w-full flex 2xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl justify-center">
  // //     {/* Left Arrow */}
  // //     <button
  // //       onClick={handlePrev}
  // //       className="absolute size-10 -left-20 top-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 ml-5"
  // //       title="Slide left"
  // //       aria-label="slide-left"
  // //     >
  // //       <ArrowLeftSVG />
  // //     </button>

  // //     {/* Carousel Track */}
  // //     <div className="flex overflow-x-hidden p-10 justify-start">
  // //       <div
  // //         className="flex gap-10 transition-transform duration-500 ease-out touch-pan-x z-0 scroll-smooth snap-mandatory"
  // //         style={{
  // //           transform: `translateX(-${
  // //             (100 / visibleCount) * news[startIndex].id * 12.5
  // //           }px)`,
  // //         }}
  // //       >
  // //         {news.map((i, index) => (
  // //           <div
  // //             key={index}
  // //             className="2xl:w-[calc(70.3rem/3)] xl:w-[calc(62.16rem/3)]"
  // //           >
  // //             <NewsItem
  // //               image={i.image}
  // //               title={i.title}
  // //               description={i.description}
  // //             />
  // //           </div>
  // //         ))}
  // //       </div>
  // //     </div>
  // //     {/* Carousel Items */}

  // //     {/* Right Arrow */}
  // //     <button
  // //       onClick={handleNext}
  // //       className="absolute size-10 -right-20 top-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 mr-5"
  // //       title="Slide right"
  // //       aria-label="slide-right"
  // //     >
  // //       <ArrowRightSVG />
  // //     </button>
  // //   </div>
  // // );
  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
        },
      },
    ],
    // adaptiveHeight: true,
    nextArrow: <RigthArrow />,
    prevArrow: <LeftArrow />,
    beforeChange: () => multiSlideAdaptiveHeight(),
    onInit: () => multiSlideAdaptiveHeight(),
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

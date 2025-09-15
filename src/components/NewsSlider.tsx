import { useEffect, useRef, useState, useLayoutEffect } from "react";

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

// export default function NewsCarousel(props: { news: SliderProps }) {
//   const { news } = props;
//   const sliderRef = useRef<Slider>(null);
//   const [sliderHeight, setSliderHeight] = useState<number>(0);

//   // This state will control the rendering of the slider
//   const [hasMounted, setHasMounted] = useState(false);

//   // This effect runs only once on the client after the component mounts
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   // Simplified function to calculate adaptive height
//   const calculateAndSetHeight = () => {
//     // A small delay to ensure slides are rendered before we measure
//     setTimeout(() => {
//       if (sliderRef.current) {
//         const sliderElement = (sliderRef.current as any).innerSlider.list;
//         const activeSlides = sliderElement.querySelectorAll(".slick-active");
//         let maxHeight = 0;
//         activeSlides.forEach((slide: Element) => {
//           if ((slide as HTMLElement).offsetHeight > maxHeight) {
//             maxHeight = (slide as HTMLElement).offsetHeight;
//           }
//         });
//         setSliderHeight(maxHeight);
//       }
//     }, 50);
//   };

//   const settings = {
//     dots: true,
//     initialSlide: 0,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Default for desktop
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//         },
//       },
//     ],
//     nextArrow: <RigthArrow />,
//     prevArrow: <LeftArrow />,
//     // Use react-slick's built-in callbacks to manage height
//     onInit: () => calculateAndSetHeight(),
//     onReInit: () => calculateAndSetHeight(), // Fires after breakpoint change
//     afterChange: () => calculateAndSetHeight(),
//   };

//   return (
//     <div className="sm:w-10/12 w-full 2xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
//       <style>
//         {`
//           .slick-list {
//             transition: height 0.5s ease !important;
//             height: ${
//               sliderHeight > 0 ? `${sliderHeight}px` : "auto"
//             } !important;
//           }
//         `}
//       </style>
//       <div className="slider-container">
//         {/* KEY CHANGE: Conditionally render the Slider */}
//         {hasMounted && (
//           <Slider {...settings} ref={sliderRef}>
//             {news.map((item, index) => (
//               <div key={index}>
//                 <NewsCard
//                   image={item.image}
//                   title={item.title}
//                   description={item.description}
//                 />
//               </div>
//             ))}
//           </Slider>
//         )}
//       </div>
//     </div>
//   );
// }

export default function NewsSlider(props: { news: SliderProps }) {
  const news = props.news;
  const sliderRef = useRef<Slider>(null);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  const [sliderHeight, setSliderHeight] = useState<number>(0);

  // This state will control the rendering of the slider
  const [hasMounted, setHasMounted] = useState(false);

  // This effect runs only once on the client after the component mounts
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Simplified function to calculate adaptive height
  const calculateAndSetHeight = () => {
    // A small delay to ensure slides are rendered before we measure
    setTimeout(() => {
      if (sliderRef.current) {
        const sliderElement = (sliderRef.current as any).innerSlider.list;
        const activeSlides = sliderElement.querySelectorAll(".slick-active");
        let maxHeight = 0;
        activeSlides.forEach((slide: Element) => {
          if ((slide as HTMLElement).offsetHeight > maxHeight) {
            maxHeight = (slide as HTMLElement).offsetHeight;
          }
        });
        setSliderHeight(maxHeight);
      }
    }, 50);
  };
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
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    onReInit: () => calculateAndSetHeight(),
    afterChange: () => calculateAndSetHeight(),
  };

  return (
    <div className="sm:w-10/12 w-full 2xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
      <style>
        {`
          .slick-list {
            transition: height 0.5s ease !important;
            height: ${
              sliderHeight > 0 ? `${sliderHeight}px` : "auto"
            } !important;
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

type ArrowSVGProps = {
  className?: string;
};

export const ArrowLeftSVG = ({ className }: ArrowSVGProps) => (
  <svg
    viewBox="-4.5 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-345.000000, -6679.000000)"
        fill="#000000"
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
            id="arrow_left-[#335]"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export const ArrowRightSVG = ({ className }: ArrowSVGProps) => (
  <svg
    viewBox="-4.5 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-305.000000, -6679.000000)"
        fill="#000000"
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
            id="arrow_right-[#336]"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
export const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    data-slot="icon"
    aria-hidden="true"
    className="block size-8"
  >
    <path
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    data-slot="icon"
    aria-hidden="true"
    className="block size-8"
  >
    <path
      d="M6 18 18 6M6 6l12 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    className="size-7"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill="white"
    />
    <path
      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
      fill="white"
    />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    fill="#ffffff"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    stroke="#ffffff"
    className="size-7"
  >
    <title>Facebook</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="7935ec95c421cee6d86eb22ecd11b7e3">
        {" "}
        <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z">
          {" "}
        </path>{" "}
      </g>{" "}
    </g>
  </svg>
);

export const TelegramIcon = () => (
  <svg
    fill="#ffffff"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24.00 24.00"
    xmlSpace="preserve"
    stroke="#ffffff"
    strokeWidth="0.00024000000000000003"
    className="size-7"
  >
    <title>Telegram</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4 c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8 C17,6.9,17.4,7.1,17.1,7.4z"></path>{" "}
      <rect y="0" className="fill-none" width="24" height="24"></rect>{" "}
    </g>
  </svg>
);

export const GmailIcon = () => (
  <svg
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="size-7"
  >
    <title>Gmail</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        stroke="#ffffff"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
      ></path>
    </g>
  </svg>
);

export const YoutubeIcon = () => (
  <svg
    viewBox="0 0 111 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-27"
  >
    <title>Біблійний Інститут Bear Valley Ukraine Youtube Channel</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.0393 53.9992L44.0358 22.5904L74.0266 38.349L44.0393 53.9992ZM109.89 17.1478C109.89 17.1478 108.804 9.44492 105.478 6.05287C101.256 1.59884 96.5249 1.57784 94.3569 1.31933C78.8239 0.187484 55.5243 0.1875 55.5243 0.1875H55.4757C55.4757 0.1875 32.1761 0.187484 16.6431 1.31933C14.4716 1.57784 9.74373 1.59884 5.51879 6.05287C2.19226 9.44492 1.10999 17.1478 1.10999 17.1478C1.10999 17.1478 0 26.1956 0 35.2399V43.7217C0 52.7695 1.10999 61.8138 1.10999 61.8138C1.10999 61.8138 2.19226 69.5167 5.51879 72.9087C9.74373 77.3628 15.2902 77.223 17.76 77.6876C26.64 78.547 55.5 78.8125 55.5 78.8125C55.5 78.8125 78.8239 78.7776 94.3569 77.6457C96.5249 77.3837 101.256 77.3628 105.478 72.9087C108.804 69.5167 109.89 61.8138 109.89 61.8138C109.89 61.8138 111 52.7695 111 43.7217V35.2399C111 26.1956 109.89 17.1478 109.89 17.1478Z"
      fill="#CE1312"
    />
  </svg>
);

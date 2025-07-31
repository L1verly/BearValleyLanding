import { useEffect, useState, useRef } from "react";
import NavLink from "./NavLink";
import { HamburgerIcon, CloseIcon } from "./Svg.tsx";
type Props = {};

const MenuToggle = (props: Props) => {
  // State to manage the open/closed state of the menu
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("animate-slide-down");
  // State to manage the icon displayed in the button
  // This is needed because on calling hide() function there is a delay, thus isOpen can't be used for changing the icon
  const [icon, setIcon] = useState(<HamburgerIcon />);
  const handleClick = () => {
    isOpen ? hide(200) : show();
  };
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        hide(200);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const show = () => {
    setIcon(<CloseIcon />);

    setAnimation("animate-slide-down");
    setIsOpen(!isOpen);
  };
  const hide = async (ms: number) => {
    setIcon(<HamburgerIcon />);
    // Sets a temporary class
    setAnimation("animate-slide-up");
    // Waits for n milliseconds
    await new Promise((r) => setTimeout(r, ms));
    // Hides the element
    setIsOpen(!isOpen);
  };

  const navButtons = [
    { title: "Головна", link: "#main" },
    { title: "Новини", link: "#news" },
    { title: "Наша команда", link: "#team" },
    { title: "Пожертвувати", link: "#donate" },
  ];

  return (
    <nav
      className="relative flex w-full h-16 items-center justify-center max-sm:justify-end"
      ref={menuRef}
    >
      <button
        onClick={handleClick}
        className="relative inline-flex sm:hidden items-center justify-center rounded-md p-2 
      text-gray-400 hover:bg-green-700 hover:text-white focus:ring-2 
      focus:ring-white focus:outline-hidden focus:ring-inset"
      >
        {icon}
      </button>
      <div className={"hidden sm:block"}>
        <div className="flex gap-10">
          {navButtons.map((button, i) => (
            <NavLink
              key={i}
              title={button.title}
              link={button.link}
              className="rounded-md px-4 py-2 hover:bg-green-800 hover:text-white"
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-14 sm:hidden w-full"
        >
          <div
            className={`bg-white drop-shadow-sm flex flex-col items-center gap-4 py-4 my-2 ${animation}`}
          >
            {navButtons.map((button, i) => (
              <NavLink
                key={i}
                title={button.title}
                link={button.link}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-green-800 hover:text-white"
              />
            ))}
            {/* <NavLink
              title="Головна"
              link="#main"
              className="block rounded-md bg-green-800 px-3 py-2 text-base font-medium text-white"
            /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuToggle;

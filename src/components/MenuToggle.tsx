import { useEffect, useState, useRef } from "react";
import NavLink from "./NavLink";
import { HamburgerIcon, ClosedIcon } from "./Svg.tsx";
type Props = {};

const MenuToggle = (props: Props) => {
  // State to manage the open/closed state of the menu
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Button clicked, isClosed:", isOpen);
    setIsOpen(!isOpen);
  };
  const menuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
        {!isOpen ? <HamburgerIcon /> : <ClosedIcon />}
      </button>
      <div className={"hidden sm:block"}>
        <div className="flex gap-10">
          <NavLink
            title="Головна"
            link="#main"
            className="rounded-md px-4 py-2 hover:bg-green-800 hover:text-white"
          />
          <NavLink
            title="Новини"
            link="#news"
            className="rounded-md px-4 py-2 hover:bg-green-800 hover:text-white"
          />
          <NavLink
            title="Наша команда"
            link="#team"
            className="rounded-md px-4 py-2 hover:bg-green-800 hover:text-white"
          />
          <NavLink
            title="Пожертвувати"
            link="#donate"
            className="rounded-md px-4 py-2 hover:bg-green-800 hover:text-white"
          />
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="absolute left-0 top-14 sm:hidden w-full"
        >
          <div
            className={
              "bg-white drop-shadow-sm flex flex-col items-center gap-4 py-4 my-2 animate-slide-down"
            }
          >
            <NavLink
              title="Головна"
              link="#main"
              className="block rounded-md bg-green-800 px-3 py-2 text-base font-medium text-white"
            />
            <NavLink
              title="Новини"
              link="#news"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-800 hover:text-white"
            />
            <NavLink
              title="Наша команда"
              link="#team"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-800 hover:text-white"
            />
            <NavLink
              title="Пожертвувати"
              link="#donate"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-800 hover:text-white"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuToggle;

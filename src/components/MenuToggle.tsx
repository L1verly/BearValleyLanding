import { useState } from "react";

type Props = {};

const MenuToggle = (props: Props) => {
  const [isClosed, setClosed] = useState(true);
  const handleClick = () => setClosed((prev) => !prev);
  return (
    <button onClick={handleClick}>
      {isClosed ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          data-slot="icon"
          aria-hidden="true"
          className="block size-8"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          data-slot="icon"
          aria-hidden="true"
          className="hidden size-8"
        >
          <path
            d="M6 18 18 6M6 6l12 12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {/* Icon when menu is closed.
        Menu open: "hidden", Menu closed: "block" */}

      {/* Icon when menu is open.
         Menu open: "block", Menu closed: "hidden" */}
    </button>
  );
};

export default MenuToggle;

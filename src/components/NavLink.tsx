import React from "react";
import type { NavLinkProps } from "../types/types";

function NavLink({ title, link, className = "" }: NavLinkProps) {
  return (
    <div>
      <a href={link} className={className}>
        {title}
      </a>
    </div>
  );
}

export default NavLink;

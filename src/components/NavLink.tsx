import React from "react";
import type { NavLinkProps } from "../types/types";

function NavLink({ title, link }: NavLinkProps) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}

export default NavLink;

export interface NavLinkProps {
  title: string;
  link: string;
  className?: string;
}

export interface ButtonProps {
  styleProps: React.CSSProperties;
  classProps: string;
  title: string;
  href: string;
}

export interface CustomButtonProps {
  title: string;
  href: string;
}

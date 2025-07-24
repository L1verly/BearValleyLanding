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

export interface NewsItem {
  image: ImageMetadata;
  title: string;
  description: string;
}

export type News = NewsItem[];

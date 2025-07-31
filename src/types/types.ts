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

export interface NewsItemType {
  image: ImageMetadata;
  title: string;
  description: string;
}

export interface TeamMemberType {
  image: ImageMetadata;
  title: string;
}

export interface NewsType extends NewsItemType {
  id: number;
}
export type SliderProps = NewsType[];

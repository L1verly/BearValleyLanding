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

export interface NewsCardType {
  image: ImageMetadata;
  title: string;
  description: string;
  otherProps?: any;
}

export interface TeamMemberCardType {
  key: number;
  image: ImageMetadata;
  name: string;
  title: string;
  description: string;
}

export type SliderProps = NewsCardType[];

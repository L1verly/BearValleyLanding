type Props = {
  children: React.ReactNode;
  href: string;
};

export const IconButton = ({ children, href }: Props) => {
  return (
    <a href={href} target="_blank" className="flex items-center justify-center">
      <div className="rounded-full border-4 border-green-700 p-3">
        {children}
      </div>
    </a>
  );
};

export default IconButton;

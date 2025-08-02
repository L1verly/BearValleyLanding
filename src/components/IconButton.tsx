type Children = {
  children: React.ReactNode;
};

export const IconButton = ({ children }: Children) => {
  return (
    <a href="/" className="flex items-center justify-center">
      <div className="rounded-full border-4 border-green-700 p-3">
        {children}
      </div>
    </a>
  );
};

export default IconButton;

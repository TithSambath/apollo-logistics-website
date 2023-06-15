export const Circle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-orange lg:h-48 lg:w-48">
    <div className="h-32 w-32 overflow-hidden rounded-full bg-white shadow-lg lg:h-44 lg:w-44">
      {children}
    </div>
  </div>
);

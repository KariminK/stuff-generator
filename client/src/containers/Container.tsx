import { ForwardedRef, forwardRef, ReactNode } from "react";

type props = {
  children: ReactNode;
  styles?: string;
};
const Container = forwardRef(
  ({ children, styles }: props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={"grid place-items-center " + styles}>
        {children}
      </div>
    );
  }
);
export default Container;

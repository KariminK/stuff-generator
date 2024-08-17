import { ReactNode } from "react";

type props = {
  children: ReactNode;
  styles?: string;
};
const Container = ({ children, styles }: props) => {
  return <div className={"grid place-items-center " + styles}>{children}</div>;
};
export default Container;

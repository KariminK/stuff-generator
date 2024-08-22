import { ReactNode } from "react";

type props = {
  children?: ReactNode;
  label: string;
  styles?: string;
  center?: boolean;
};

const LabeledContainer = ({ children, label, styles, center }: props) => {
  return (
    <div className={"border-2 rounded-xl p-4 " + styles}>
      <p className="text-2xl font-bold">{label}</p>
      <div className={"flex " + (center && "justify-center items-center")}>
        {children ?? "..."}
      </div>
    </div>
  );
};
export default LabeledContainer;

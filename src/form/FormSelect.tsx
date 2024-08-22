import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type props = {
  label: string;
  id?: string;
  styles?: string;
  options: Array<string>;
  onChange: (option: string) => void;
  selected: string;
};
const FormSelect = ({
  label,
  id,
  styles,
  options,
  onChange,
  selected,
}: props) => {
  const [active, setActive] = useState<boolean>(false);

  const optionClickHandler = (option: string) => {
    onChange(option);
    setActive(false);
  };
  const selectClickHandler = () => {
    setActive(!active);
  };

  const optionElements = options.map((option, index) => {
    return (
      <li
        className="p-3 bg-slate-900 rounded-lg border-b w-72 lg:text-xl cursor-pointer hover:bg-slate-800"
        onClick={() => optionClickHandler(option)}
        key={index}
      >
        {option}
      </li>
    );
  });

  return (
    <div className={"flex flex-col relative " + styles}>
      <label className="font-bold mx-4 text-sm lg:text-xl" htmlFor={id}>
        {label}
      </label>
      <div
        onClick={selectClickHandler}
        className="w-72 h-9 cursor-pointer bg-transparent border-2 rounded-xl px-5 py-1 flex items-center justify-between lg:text-xl"
      >
        <span>{selected}</span>
        {active ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <ul className={"absolute top-14 lg:top-16 z-10 " + (!active && "hidden")}>
        {optionElements}
      </ul>
    </div>
  );
};
export default FormSelect;

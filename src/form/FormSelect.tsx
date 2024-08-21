import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type props = {
  label: string;
  name: string;
  id?: string;
  styles?: string;
  options: Array<string>;
};
const FormSelect = ({ label, id, name, styles, options }: props) => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const optionClickHandler = (option: string) => {
    setSelected(option);
    setActive(false);
  };
  const selectClickHandler = () => {
    setActive(!active);
  };

  const optionElements = options.map((option) => {
    return (
      <li
        className="p-3 bg-slate-900 rounded-lg border-b w-72 cursor-pointer hover:bg-slate-800"
        onClick={() => optionClickHandler(option)}
      >
        {option}
      </li>
    );
  });

  return (
    <div className={"flex flex-col relative " + styles}>
      <label className="font-bold mx-4 text-sm" htmlFor={id}>
        {label}
      </label>
      <div
        onClick={selectClickHandler}
        className="w-72 h-9 cursor-pointer bg-transparent border-2 rounded-xl px-5 py-1 flex items-center justify-between"
      >
        <span>{selected}</span>
        {active ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <ul className={"absolute top-14 " + (!active && "hidden")}>
        {optionElements}
      </ul>
      <select className="hidden" name={name} value={selected} id={id}></select>
    </div>
  );
};
export default FormSelect;

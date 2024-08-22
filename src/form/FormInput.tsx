import { ChangeEventHandler } from "react";

type props = {
  label: string;
  name: string;
  type: "text" | "number";
  id?: string;
  styles?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
};
const FormInput = ({
  label,
  name,
  type,
  id,
  styles,
  onChange,
  value,
}: props) => {
  if (typeof value === "number" && Number.isNaN(value)) value = "";
  return (
    <div className={"flex flex-col " + styles}>
      <label className="font-bold mx-4 text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="bg-transparent border-2 rounded-xl outline-none px-5 py-1 w-72 text-lg"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder="..."
      />
    </div>
  );
};
export default FormInput;

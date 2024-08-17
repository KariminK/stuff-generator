type props = {
  label: string;
  name: string;
  type: "text" | "number";
  id?: string;
  styles?: string;
};
const FormInput = ({ label, name, type, id, styles }: props) => {
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
        placeholder="..."
      />
    </div>
  );
};
export default FormInput;

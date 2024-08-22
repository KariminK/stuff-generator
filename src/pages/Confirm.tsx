import { Link, useOutletContext } from "react-router-dom";
import Container from "../containers/Container";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import LabeledContainer from "../containers/LabeledContainer";
import data from "../types/data";

const Confirm = () => {
  const { data }: { data: data } = useOutletContext();
  return (
    <>
      <Container styles="bg-slate-900">
        <Link
          to={"/generate"}
          className="flex flex-col justify-center items-center text-4xl font-outfit font-bold bg-gray-600 hover:bg-gray-500 py-3 px-7 rounded-2xl"
        >
          Generate
          <FaAngleDown />
        </Link>
      </Container>
      <Link
        to={"/"}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-blue-800 hover:bg-blue-700 rounded-full p-3"
      >
        <FaAngleLeft />
      </Link>
      <Container styles="font-outfit">
        <div>
          <h1 className="text-center text-4xl font-bold my-8">
            Confirm your input data
          </h1>
          <section className="grid grid-cols-2 grid-rows-2 gap-4 max-w-xl h-96">
            <LabeledContainer label="Topic" styles="col-span-2">
              <p className="text-xl">{data.topic}</p>
            </LabeledContainer>
            <LabeledContainer label="Style" center={true}>
              <p className="text-xl">{data.style}</p>
            </LabeledContainer>
            <LabeledContainer label="Words" center={true}>
              <p className="text-xl">{data.wordNumber}</p>
            </LabeledContainer>
          </section>
        </div>
      </Container>
    </>
  );
};
export default Confirm;

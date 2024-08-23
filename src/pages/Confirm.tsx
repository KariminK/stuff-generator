import { Link, Outlet, useOutletContext } from "react-router-dom";
import Container from "../containers/Container";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import LabeledContainer from "../containers/LabeledContainer";
import data from "../types/data";

const Confirm = () => {
  const { data }: { data: data } = useOutletContext();
  return (
    <>
      <main className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 relative">
        <Container styles="bg-slate-900 lg:row-start-3 ">
          <Link
            to={"./generate"}
            className="flex flex-col justify-center items-center text-4xl font-outfit font-bold bg-gray-600 hover:bg-gray-500 py-3 px-7 rounded-2xl"
          >
            Generate
            <FaAngleDown />
          </Link>
        </Container>
        <Link
          to={"/"}
          className="absolute left-1/2 top-1/2 lg:top-2/3 -translate-x-1/2 -translate-y-1/2 text-5xl bg-blue-800 hover:bg-blue-700 rounded-full p-3"
        >
          <FaAngleLeft />
        </Link>
        <Container styles="font-outfit lg:row-start-1 lg:row-span-2 sm:block">
          <div className="sm:h-full sm:flex sm:flex-col sm:p-4">
            <h1 className="text-center sm:items text-4xl sm:text-2xl  font-bold my-8 sm:my-4">
              Confirm your input data
            </h1>
            <section className="grid grid-cols-2 grid-rows-2 gap-4 max-w-xl h-96 lg:h-full  ">
              <LabeledContainer label="Topic" styles="col-span-2">
                <p className="text-xl lg:text-2xl">{data.topic}</p>
              </LabeledContainer>
              <LabeledContainer label="Style" center={true}>
                <p className="text-xl lg:text-2xl">{data.style}</p>
              </LabeledContainer>
              <LabeledContainer label="Words" center={true}>
                <p className="text-xl lg:text-2xl">
                  {Number.isNaN(data.wordNumber) ? 0 : data.wordNumber}
                </p>
              </LabeledContainer>
            </section>
          </div>
        </Container>
      </main>
      <Outlet />
    </>
  );
};
export default Confirm;

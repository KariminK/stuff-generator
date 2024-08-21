import { Link, useParams } from "react-router-dom";
import Container from "../containers/Container";
import { FaAngleDown } from "react-icons/fa6";
import LabeledContainer from "../containers/LabeledContainer";

const Confirm = () => {
  const params = useParams();

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
      <Container styles="font-outfit">
        <div>
          <h1 className="text-center text-4xl font-bold my-8">
            Confirm your input data
          </h1>
          <section className="grid grid-cols-2 grid-rows-2 gap-4 max-w-xl h-96">
            <LabeledContainer label="Topic" styles="col-span-2">
              <p className="text-2xl">{params.topic}</p>
            </LabeledContainer>
            <LabeledContainer label="Style" center={true}>
              <p className="text-4xl">{params.style}</p>
            </LabeledContainer>
            <LabeledContainer label="Words" center={true}>
              <p className="text-5xl">{params.wordNumber}</p>
            </LabeledContainer>
          </section>
        </div>
      </Container>
    </>
  );
};
export default Confirm;

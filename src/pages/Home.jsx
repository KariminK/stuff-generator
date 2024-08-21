import Container from "../containers/Container";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import { FaAngleRight } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <Container styles=" font-outfit">
        <div>
          <h1 className="text-5xl font-extrabold mt-20">Enter your idea</h1>
          <form>
            <FormInput
              label="Topic"
              type="text"
              id="topic"
              name="topic"
              styles="my-10 ml-20"
            />
            <FormSelect
              label="Style"
              id="style"
              name="style"
              styles="my-10"
              options={["x", "y", "z"]}
            />
            <FormInput
              label="Amount of words"
              type="number"
              id="words-amount"
              name="words-amount"
              styles="my-10 ml-20"
            />
          </form>
        </div>
      </Container>
      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-blue-800 hover:bg-blue-700 rounded-full p-3">
        <FaAngleRight />
      </button>
      <Container styles="bg-slate-900 row-span-2">
        <span className="text-[140px]">...</span>
      </Container>
    </>
  );
};

export default Home;

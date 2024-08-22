import { useOutletContext } from "react-router-dom";
import Container from "../containers/Container";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import { FaAngleRight } from "react-icons/fa6";
import OutletContext from "../types/outletContext";

const Home = () => {
  const styleOptions = ["fairytale", "poem", "speech", "motivational", "story"];

  const { data, handlers }: OutletContext = useOutletContext();

  return (
    <>
      <Container styles=" font-outfit">
        <div>
          <h1 className="text-5xl font-extrabold mt-20">Enter your idea</h1>
          <form onSubmit={(e) => handlers.formSubmitHandler(e)}>
            <FormInput
              label="Topic"
              type="text"
              id="topic"
              name="topic"
              styles="my-10 ml-20"
              value={data.topic}
              onChange={handlers.changeTopicHandler}
            />
            <FormSelect
              label="Style"
              id="style"
              styles="my-10"
              options={styleOptions}
              selected={data.style}
              onChange={handlers.changeStyleHandler}
            />
            <FormInput
              label="Amount of words"
              type="number"
              id="words-amount"
              name="words-amount"
              styles="my-10 ml-20"
              value={data.wordNumber}
              onChange={handlers.changeWordNumber}
            />
            <button
              type="submit"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-blue-800 hover:bg-blue-700 rounded-full p-3"
            >
              <FaAngleRight />
            </button>
          </form>
        </div>
      </Container>

      <Container styles="bg-slate-900 row-span-2">
        <span className="text-[140px]">...</span>
      </Container>
    </>
  );
};

export default Home;

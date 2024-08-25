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
    <main className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 relative">
      <Container styles=" font-outfit lg:row-span-2">
        <div>
          <h1 className="text-5xl sm:text-4xl lg:mt-5  sm:text-center  font-extrabold mt-20 ">
            Enter your idea
          </h1>
          <form onSubmit={(e) => handlers.formSubmitHandler(e)}>
            <FormInput
              label="Topic"
              type="text"
              id="topic"
              name="topic"
              styles="my-10 sm:my-3 ml-20"
              value={data.topic}
              onChange={handlers.changeTopicHandler}
            />
            <FormSelect
              label="Style"
              id="style"
              styles="my-10 sm:my-3"
              options={styleOptions}
              selected={data.style}
              onChange={handlers.changeStyleHandler}
            />
            <FormInput
              label="Amount of words"
              type="number"
              id="words-amount"
              name="words-amount"
              styles="my-10 sm:my-3 ml-20"
              value={data.wordNumber}
              onChange={handlers.changeWordNumber}
            />
            <button
              type="submit"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-2/3 text-5xl bg-blue-800 hover:bg-blue-700 rounded-full p-3"
            >
              <FaAngleRight />
            </button>
          </form>
        </div>
      </Container>

      <Container styles="bg-slate-900 row-span-2">
        <span className="text-[140px]">...</span>
      </Container>
    </main>
  );
};

export default Home;

import Navbar from "./Navbar";
import Container from "./containers/Container";
import FormInput from "./form/FormInput";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-navbar h-screen bg-slate-950 text-white">
      <Navbar />
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
            <FormInput
              label="Style"
              type="text"
              id="style"
              name="style"
              styles="my-10"
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
      <Container styles="bg-slate-900 row-span-2">
        <span className="text-[140px]">...</span>
      </Container>
    </div>
  );
}

export default App;

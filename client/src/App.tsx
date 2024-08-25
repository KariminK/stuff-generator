import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import data from "./types/data";
import { ChangeEvent, FormEvent, useState } from "react";
import OutletContext from "./types/outletContext";
const App = () => {
  const [topic, setTopic] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [wordNumber, setWordNumber] = useState<string>("");
  const data: data = {
    topic,
    style,
    wordNumber: parseInt(wordNumber),
  };
  const navigator = useNavigate();

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (topic === "") return;
    navigator(`/confirm`);
  };
  const changeTopicHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };
  const changeWordNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setWordNumber(e.target.value);
  };
  const changeStyleHandler = (opt: string) => setStyle(opt);

  const context: OutletContext = {
    data,
    handlers: {
      formSubmitHandler,
      changeTopicHandler,
      changeWordNumber,
      changeStyleHandler,
    },
  };
  return (
    <div className="grid grid-rows-navbar bg-slate-950 text-white">
      <Navbar />
      <Outlet context={context} />
    </div>
  );
};
export default App;

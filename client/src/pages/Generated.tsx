import { useEffect, useRef } from "react";
import Container from "../containers/Container";
import useAi from "../hooks/useAi";
import { useOutletContext } from "react-router-dom";
import data from "../types/data";

const Generated = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { data }: { data: data } = useOutletContext();
  const [loading, error, fetchedData] = useAi(data.wordNumber);
  let text = "";
  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);
  if (loading) text = "Loading...";
  if (error) text = error.toString();
  if (fetchedData) text = fetchedData.toString();

  return (
    <Container styles="row-span-4 h-screen font-outfit" ref={ref}>
      <div className="w-full max-w-4xl lg:max-w-full lg:px-10">
        <h1 className="text-2xl font-semibold">ChatGPT 2 </h1>

        <textarea
          className="w-full min-h-96 bg-gray-600 rounded-2xl outline-none p-4 text-2xl"
          value={text}
        ></textarea>
      </div>
    </Container>
  );
};
export default Generated;

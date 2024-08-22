import { useEffect, useRef } from "react";
import Container from "../containers/Container";

const Generated = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);
  return (
    <Container styles="row-span-4 h-screen font-outfit" ref={ref}>
      <div className="w-full max-w-4xl lg:max-w-full lg:px-10">
        <h1 className="text-2xl font-semibold">ChatGPT 2 </h1>
        <textarea className="w-full min-h-96 bg-gray-600 rounded-2xl outline-none p-4 text-2xl"></textarea>
      </div>
    </Container>
  );
};
export default Generated;

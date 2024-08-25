import { useEffect, useState } from "react";
const useAi = (length: number | string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<string>("");

  const fetchData = async (length: number | string) => {
    try {
      const response = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler?sentences=${length}`
      );
      const jsonData = await response.json();
      setLoading(false);
      setData(jsonData);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(length);
  }, [length]);
  return [loading, error, data];
};
export default useAi;

import { useEffect, useState } from "react";

export function useSearch(initValue) {
  const [inputValue, setInputValue] = useState("");
  const [myList, setMyList] = useState(initValue);

  useEffect(() => {
    setMyList(initValue.filter((item) => item.name.includes(inputValue)));
  }, [initValue, inputValue]);

  function setInputEventValue(e) {
    setInputValue(e.target.value);
  }

  return [myList, setInputEventValue];
}

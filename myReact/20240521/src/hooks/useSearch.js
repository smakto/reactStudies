import { useEffect, useState } from "react";

export function useSearch(initValue, searchFunct) {
  const [inputValue, setInputValue] = useState("");
  const [myList, setMyList] = useState(initValue);

  useEffect(() => {
    setMyList(
      initValue.filter((item) =>
        // item.name.toLowerCase().includes(inputValue.toLowerCase())
        searchFunct(item, inputValue)
      )
    );
  }, [searchFunct, initValue, inputValue]);

  function setInputEventValue(e) {
    setInputValue(e.target.value);
  }

  return [myList, setInputEventValue];
}

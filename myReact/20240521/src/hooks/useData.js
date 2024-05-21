import { useEffect, useState } from "react";

export function useData(url) {
  const [dataSet, setNewDataset] = useState([]);

  useEffect(() => {
    async function retrieveData() {
      const response = await fetch(
        `https://glittery-dull-snickerdoodle.glitch.me/v1/${url}`
      );
      const result = await response.json();
      setNewDataset(result);
    }
    retrieveData();
  }, [url]);

  return dataSet;
}

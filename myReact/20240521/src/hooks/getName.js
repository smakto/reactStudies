import { useEffect, useState } from "react";

export function useName(id) {
  const [dataSet, setNewDataset] = useState([]);
  const [petName, setName] = useState("");

  useEffect(() => {
    async function retrieveData() {
      const response = await fetch(
        `https://equable-mire-elderberry.glitch.me/v1/pets`
      );
      const result = await response.json();
      setNewDataset(result);
    }
    retrieveData();
  }, []);

  useEffect(() => {
    if (dataSet) {
      let result = dataSet.filter((items) => items.id === Number(id));
      setName(result);
      //   setName(result[0].name);
    }
  }, [dataSet, id]);

  return { petName };
}

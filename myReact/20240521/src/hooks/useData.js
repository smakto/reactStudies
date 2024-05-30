import { useEffect, useState } from "react";

export function useData(url) {
  const [dataSet, setNewDataset] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function retrieveData() {
      const response = await fetch(
        `https://equable-mire-elderberry.glitch.me/v1/${url}`
      );
      const result = await response.json();
      setNewDataset(result);
      setLoaded(true);
    }
    retrieveData();
  }, [url]);

  function deleteByID(id) {
    dataSet.map((item) => {
      if (item.id === id) {
        item.archived = 1;
      }
    });
    setNewDataset([...dataSet]);
  }

  function addData(newData) {
    fetch(`https://equable-mire-elderberry.glitch.me/v1/${url}`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return { dataSet, loaded, deleteByID, addData };
}

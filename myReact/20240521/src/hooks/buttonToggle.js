// import { useState } from "react";

export function useToggle(initialData, setNewData) {
  function toggle() {
    setNewData(initialData ? false : true);
  }

  return [toggle];
}

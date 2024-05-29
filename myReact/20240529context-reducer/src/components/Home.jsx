import { useCounterContext } from "./CounterContext";

export function Home() {
  const myState = useCounterContext();
  console.log(myState);
  return (
    <div>
      {myState.title}:{myState.counter}
      <br />
      {myState.title}:{myState.counterTwo}
      <br />
      <button
        onClick={() => {
          myState.dispatch({
            type: "ADD",
          });
        }}
      >
        ADD +1
      </button>
      <br />
      <button
        onClick={() => {
          myState.dispatch({
            type: "ADD5",
          });
        }}
      >
        ADD +5
      </button>
      <br />
      <button
        onClick={() => {
          myState.dispatch({
            type: "CHANGE_TITLE",
            newTitle: "COUNTER V2",
          });
        }}
      >
        Change Title
      </button>
    </div>
  );
}

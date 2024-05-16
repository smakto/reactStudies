export function Button({ type, text, clickEvent }) {
  return (
    <button type={type} onClick={clickEvent}>
      {text}
    </button>
  );
}

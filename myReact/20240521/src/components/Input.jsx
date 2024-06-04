export function Input({ label, name, type, handleChange, actionType, action }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={(event) => {
          event.preventDefault();
          handleChange(event.target.value, actionType, action);
        }}
      ></input>
    </>
  );
}

export function Input({ label, name, type, handleChange, setData }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={() => {
          event.preventDefault();
          handleChange(event.target.value, setData);
        }}
      ></input>
    </>
  );
}

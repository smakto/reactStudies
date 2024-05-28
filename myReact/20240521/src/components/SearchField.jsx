export function SearchField({ handleInput }) {
  return (
    <div className="searchDiv">
      <input type="text" onChange={handleInput} placeholder="Search" />
    </div>
  );
}

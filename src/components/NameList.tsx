import React from "react";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  list: string[];
}

const NameList: React.FC<Props> = ({
  setInputValue,
  setList,
  inputValue,
  list,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setList((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = () => {
    event.preventDefault();
    setList([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a string"
        />
        <button type="submit">Add</button>
        <button onClick={handleDelete}>Clear</button>
      </form>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;

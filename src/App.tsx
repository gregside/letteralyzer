import { useState } from "react";
import NameList from "./components/NameList";
import LetterChart from "./components/LetterChart";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const calculateCharacterFrequency = (
    names: string[]
  ): { letter: string; amount: number }[] => {
    const charCount: { [key: string]: number } = {};

    // Iterate through each string in the array
    names.forEach((name) => {
      // Iterate through each character in the string
      name
        .toUpperCase()
        .split("")
        .forEach((char) => {
          if (char == " ") {
            return;
          } else {
            // Increment the count for the character in the map
            charCount[char] = (charCount[char] || 0) + 1;
          }
        });
    });

    // Convert charCount object to array of objects
    return Object.entries(charCount).map(([letter, amount]) => ({
      letter,
      amount,
    }));
  };

  const data = calculateCharacterFrequency(list);

  return (
    <div className="container">
      <LetterChart displayData={data} />
      <NameList
        setInputValue={setInputValue}
        setList={setList}
        inputValue={inputValue}
        list={list}
      />
    </div>
  );
}

export default App;

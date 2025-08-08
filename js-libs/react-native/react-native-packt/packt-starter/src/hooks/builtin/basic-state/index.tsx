import { useState, type ChangeEvent } from "react";

function BasicState() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleChangeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeAgeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value ? parseInt(value) : 0);
  };

  return (
    <>
      <p>My name is {name}</p>

      <input
        onChange={handleChangeNameInput}
        type="text"
      />

      <p>My age is {age}</p>

      <input
        onChange={handleChangeAgeInput}
        type="text"
      />
    </>
  );
}

export default BasicState;


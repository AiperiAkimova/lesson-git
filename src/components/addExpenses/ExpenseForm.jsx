import { useState } from "react";

const ExpenseForm = ({addHandler}) => {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const getText = (e) => {
    setText(e.target.value);
  };
  const getNum = (e) => {
    setNum(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      name: text,
      age: num,
      id: Math.random().toString(),
    };
    addHandler(expenseData)
    setText("");
    setNum("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" value={text} onChange={getText} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={num} onChange={getNum} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

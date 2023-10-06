import { useEffect, useState } from "react";

import "./AddExpense.scss";

const AddExpense = ({ addExpense, type }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [addDisabled, setAddDisabled] = useState(true);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (title && amount > 0) {
      setAddDisabled(false);
      console.log(false);
    } else {
      setAddDisabled(true);
    }
  }, [title, amount]);

  const handleAdd = () => {
    addExpense({ title, amount, type });
    setTitle("");
    setAmount("");
  };

  return (
    <div className="add-expense-card">
      <h3>Add your expense here</h3>
      <div className="add-title">
        <span className="label">Title:</span>{" "}
        <input type="text" onChange={changeTitle} />
      </div>
      <div className="add-amount">
        <span className="label">Spent:</span>{" "}
        <input type="number" onChange={changeAmount} />
      </div>

      {/* <Select options={expenseTypes} onChange={changeExpenseType} /> */}
      <button
        className="add-expense-button"
        disabled={addDisabled}
        onClick={handleAdd}
      >
        Add +
      </button>
    </div>
  );
};

export default AddExpense;

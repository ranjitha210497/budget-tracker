import { useEffect, useState } from "react";
import { expenseTypes } from "../../constants";
import { capitalizeFirstLetter } from "../../helpers";

import "./AddExpense.scss";

const AddExpense = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(expenseTypes[0]);
  const [addDisabled, setAddDisabled] = useState(true);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeExpenseType = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    if (title && type && amount > 0) {
      setAddDisabled(false);
      console.log(false);
    } else {
      setAddDisabled(true);
    }
  }, [title, amount, type]);

  const add = () => {
    addExpense({ title, amount, type });
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

      <select
        className="expenseType"
        name="expenseType"
        id="expenseType"
        onChange={changeExpenseType}
      >
        {expenseTypes.map((type) => (
          <option value={type}>{capitalizeFirstLetter(type)}</option>
        ))}
      </select>
      <button
        className="add-expense-button"
        disabled={addDisabled}
        onClick={add}
      >
        Add +
      </button>
    </div>
  );
};

export default AddExpense;

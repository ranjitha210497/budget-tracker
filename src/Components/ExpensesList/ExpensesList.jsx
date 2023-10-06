import React, { useState } from "react";
import AddExpense from "../AddExpense/AddExpense";
import { expenseTypes } from "../../constants";
import { HiPlusCircle } from "react-icons/hi";

import "./ExpensesList.scss";

const ExpensesList = ({ expenses, addExpense }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (id) => {
    setActiveIndex(id);
  };
  return (
    <div className="accordion">
      {expenseTypes.map((type, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <h5>{type}</h5>
            <HiPlusCircle className="plus" size={25} />
          </div>

          <div
            className={`accordion-content ${
              index === activeIndex ? "open" : "closed"
            }`}
          >
            <ol className="expense-list">
              {expenses[type].history.map((expense) => (
                <li className="expense-item">
                  <p>{expense.title}</p>
                  <p>INR: {expense.amount}</p>
                </li>
              ))}
            </ol>
            <AddExpense addExpense={addExpense} type={type} />
            <div className="footer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;

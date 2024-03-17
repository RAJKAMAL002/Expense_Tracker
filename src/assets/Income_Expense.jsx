import React, { useContext, useEffect, useState } from "react";
import { expense } from "../contexts/ExpenseTracker";

export const Income_Expense = () => {
  const a = useContext(expense);
  const [income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    a.forEach(({ amount }) => {
      if (amount) {
        const parsedAmount = parseInt(amount);
        if (!isNaN(parsedAmount)) {
          if (parsedAmount > 0) {
            totalIncome += parsedAmount;
          } else {
            totalExpense -= parsedAmount; // Taking the absolute value for expenses
          }
        }
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
  });
  return (
    <div className="w-11/12 bg-white grid grid-cols-2 py-8 shadow-lg my-5">
      <span className="flex flex-col items-center justify-center border-r border-gray-400">
        <p className=" font-medium">INCOME</p>
        <p className="font-medium text-green-600 text-xl ">{income}</p>
      </span>
      <span className=" flex flex-col items-center justify-center">
        <p className=" font-medium">EXPENSE</p>
        <p className="font-medium text-red-600 text-xl">{Expense}</p>
      </span>
    </div>
  );
};

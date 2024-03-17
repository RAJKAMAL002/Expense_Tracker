import React, { useContext, useEffect, useState } from "react";
import { expense } from "../contexts/ExpenseTracker";

export const Balance_Amount = () => {
  const a = useContext(expense);
  const [balance, setBalance] = useState(0);
  const [edit, setEdit] = useState(false);
  const [bal, setBal] = useState(() => {
    const storedBalance = JSON.parse(localStorage.getItem("balance"));
    return storedBalance !== null && !isNaN(storedBalance) ? storedBalance : 0;
  });

  useEffect(() => {
    let sum = parseInt(bal);
    a.filter((val) => !isNaN(parseInt(val.amount))).forEach(
      (val) => (sum += parseInt(val.amount))
    );
    setBalance(sum);
  }, [bal, a]);

  useEffect(() => localStorage.setItem("balance", parseInt(bal)), [bal]);

  return (
    <div className="w-full text-left px-5">
      <p className="text-xs">YOUR BALANCE</p>
      <div className="flex justify-between items-center w-full">
        {edit ? (
          <input
            onChange={(e) => setBal(e.target.value)}
            id="in"
            className="outline-none"
            type="text"
          />
        ) : (
          <h2 className="font-medium text-2xl">{balance}</h2>
        )}
        {edit ? (
          <input
            className="text-lg font-medium bg-violet-400 text-white py-1 my-4 rounded-lg w-1/5"
            type="button"
            value="Add"
            onClick={() => setEdit((prev) => !prev)}
          />
        ) : (
          <input
            className="text-lg font-medium bg-violet-400 text-white py-1 my-4 rounded-lg w-1/5"
            type="button"
            value="+Edit"
            onClick={() => setEdit((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

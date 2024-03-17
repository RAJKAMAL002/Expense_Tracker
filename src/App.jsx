import React, { useEffect, useState } from "react";
import { Header } from "./assets/Header";
import { Balance_Amount } from "./assets/Balance_Amount";
import { Income_Expense } from "./assets/Income_Expense";
import { Add_trans } from "./assets/Add_trans";
import { History } from "./assets/History";
import { expense } from "./contexts/ExpenseTracker";

function App() {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const [data, setData] = useState({});
  const [list, setList] = useState(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    return savedExpenses !== null ? savedExpenses : [];
  });

  const [del, setDel] = useState();

  const fun = (data) => setData(data);
  const delete_data = (data) => setDel(data);

  // Save list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    if (!isEmpty(data)) setList([data, ...list]);
  }, [data]);
  useEffect(() => setList((prev) => prev.filter((val) => val !== del)), [del]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-96 flex items-center flex-col">
        <Header />
        <expense.Provider value={list}>
          <Balance_Amount />
          <Income_Expense />
          <History delData={delete_data} />
          <Add_trans data={fun} />
        </expense.Provider>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

export const Add_trans = ({ data }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const fun = () => {
    if (text != "" && amount != "" && !isNaN(parseInt(amount)))
      data({ text: text, amount: amount });
    setText("");
    setAmount("");
  };
  return (
    <div className=" w-11/12">
      <div className=" text-lg font-medium border-b border-gray-500 py-1 my-5">
        Add new transaction
      </div>
      <form className=" flex flex-col justify-center">
        <label className="text-lg font-medium ">Text</label>
        <input
          className=" py-2 px-2 outline-none my-1"
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className="text-lg font-medium ">Amount</label>
        <input
          className=" py-2 px-2 outline-none my-1"
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="text-lg font-medium bg-violet-400 text-white py-2 my-4"
          type="button"
          value="Add transaction"
          onClick={fun}
        />
      </form>
    </div>
  );
};

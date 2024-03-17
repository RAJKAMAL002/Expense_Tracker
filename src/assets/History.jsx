import React, { useContext, useEffect, useState } from "react";
import { expense } from "../contexts/ExpenseTracker";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const History = ({ delData }) => {
  const data = useContext(expense);
  const del = (val) => delData(val);
  console.log(JSON.parse(localStorage.getItem("expenses")));
  return (
    <>
      <div className=" w-11/12">
        <div className="text-lg font-medium text-left w-full my-2">History</div>
        <div className="w-full overflow-y-auto max-h-28">
          {data
            .filter((val) => !isEmpty(val))
            .map((val) => {
              return (
                <div
                  className={` relative bg-white py-3 flex items-center px-3 shadow-md my-2 ${
                    parseInt(val.amount[0]) > 0
                      ? " border-r-4 border-green-500 "
                      : "border-r-4 border-red-500"
                  }`}
                  key={val.id}
                >
                  <span className=" w-4/5">{val.text}</span>
                  <span
                    className={`${
                      parseInt(val.amount[0]) > 0
                        ? "text-green-500"
                        : " text-red-500"
                    }`}
                  >
                    {val.amount}
                  </span>
                  <span
                    onClick={() => del(val)}
                    className=" absolute right-4 text-gray-400"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

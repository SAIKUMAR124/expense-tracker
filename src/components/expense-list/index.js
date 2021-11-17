import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  console.log(list);
  return (
    <div className="expense-list">
      {list.length ? (
        list.map((item) => <Card item={item} />)
      ) : (
        <div className="empty-list">
          <div>Empty list</div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;

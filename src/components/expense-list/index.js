import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from "../add-form/success-modal";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const notifySuccess = () => toast.success("Expense Deleted");

  const filterList = list.filter((item) => item.title.includes(query));

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filterList.length ? (
        filterList.map((item, index) => (
          <Card item={item} notifySuccess={notifySuccess} key={index} />
        ))
      ) : (
        <div className="empty-list">
          <div>Empty list</div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;

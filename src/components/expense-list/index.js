import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from "../add-form/success-modal";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  const notifySuccess = ()=>toast.success('Expense Deleted')

  

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {list.length ? (

  list.map((item, index) => <Card item={item} notifySuccess={notifySuccess} key={index} />)
      ) : (
        <div className="empty-list">
          <div>Empty list</div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;

import React, { useState } from "react";
import "./AddForm.css";
import { FiChevronDown } from "react-icons/fi";
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { BiPaperPlane } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [catOpen, setCatOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (Category) => {
    setCategory(Category);
    setCatOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
        const notify = () => toast("Please enter valid data");
        notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          className="amount-input"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCatOpen(!catOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i>
              <FiChevronDown />
            </i>
          </div>
          <div>
            {catOpen && (
              <div>
                {cat.map((category) => (
                  <div
                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <div className='cat-icons'>{category.icon}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i>
            <BiPaperPlane />
          </i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;

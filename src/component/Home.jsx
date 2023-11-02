import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "../Action";
// import { useId } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid"; 

const Home = () => {
  const incomeData = useSelector((state) => state.dataReducer.Income);
  const expenseData = useSelector((state) => state.dataReducer.Expense);
  const curentTime = new Date().toLocaleTimeString();
//   const createId = useId();

//   console.log(createId , 'iddddddddddddddddddddd');

  const totalIncome = incomeData.reduce((total, income) => total + +income.amount, 0);
  const totalExpense = expenseData.reduce((total, expense) => total + +expense.amount, 0);

// console.log(totalIncome,"tottalincome");
// console.log(totalExpense,"totalexpense");

  const totalAmount = totalIncome - totalExpense;

  const [values, setValues] = useState({
    type: "Income",
    category: "",
    amount: "",
    date: getCurrentDate(),
    time: curentTime,
  });
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {

    const dataObject = {
      type: values.type,
      category: values.category,
      amount: values.amount,
      date: values.date,
      time: values.time,
      id: uuidv4(),
    };

    if (values.type === "Income") {
      dispatch(addIncome(dataObject));
    } else {
      dispatch(addExpense(dataObject));
    }

    setValues({
      type: "Income",
      category: "",
      amount: "",
      date: getCurrentDate(),
      time: curentTime,
    });
  };

  const incomeCategories = [
    "Business",
    "Investments",
    "Extra Income",
    "Deposit",
    "Salary",
    "Rental Income",
  ];
  const expenseCategories = [
    "Bills",
    "Car",
    "Clothes",
    "Travel",
    "Food",
    "Shopping",
    "Electronics",
    "Others",
  ];

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="bg-blue-200 w-5/12 px-5 py-2 ring-4">
      <h1 className="text-3xl font-semibold tracking-[10px]">Expense Tracker</h1>
      <h1 className=" pt-2 tracking-widest">Now handle your expense at ease</h1>
      <h1 className="text-xl font-semibold mt-12 text-center">
        Total Balance: <span className="text-2xl font-bold text-blue-600">$ {totalAmount}</span>
      </h1>
      <hr className="h-[5px] bg-gray-100 mt-5" />

      <div className="pt-10 flex gap-10">
        <select
          name="type"
          id="type"
          className="w-6/12"
          value={values.type}
          onChange={handleInputChange}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <select
          name="category"
          id="category"
          className="w-6/12"
          value={values.category}
          onChange={handleInputChange}
        >
          {values.type === "Income"
            ? incomeCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))
            : expenseCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
        </select>
      </div>

      <div className="pt-10 flex gap-10">
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="w-6/12 px-2"
          value={values.amount}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          className="w-6/12"
          value={values.date}
          onChange={handleInputChange}
        />
      </div>

      <button
        className="w-full ring-4 bg-black text-white mt-10 py-2 text-lg font-semibold"
        onClick={handleAddTransaction}
      >
        Create
      </button>
    </div>
  );
};

export default Home;

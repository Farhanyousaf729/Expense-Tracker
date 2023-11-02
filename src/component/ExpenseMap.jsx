import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../Action';
import { IoTrashBinSharp } from 'react-icons/io5'; 

const ExpenseMap = () => {
  const expenseData = useSelector((state) => state.dataReducer.Expense);

  const dispatch = useDispatch();

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div className="ring-4 bg-gray-100 w-3/12">
      <h1 className="text-2xl text-center font-semibold">Expense</h1>
      <div>
        {expenseData?.length > 0 ? (
          expenseData.map((ele, index) => (
            <div key={index} className="flex pt-5 px-2">
              <div className="flex gap-5 items-center">
                <h1 className="text-lg font-medium">{ele.amount}</h1>
                <h1 className='text-lg text-red-600 font-semibold'>{ele.category}</h1>
                <div>
                <h1 className='text-xs'>{ele.date}</h1>
                <h1 className='text-xs'>{ele.time}</h1>
                </div>
                <button onClick={() => handleDeleteExpense(ele.id)}><IoTrashBinSharp/></button>
              </div>
            </div>
          ))
        ) : (
          <p>No data here</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseMap;

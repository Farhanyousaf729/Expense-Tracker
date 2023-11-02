import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome } from "../Action";
import {IoTrashBinSharp} from "react-icons/io5"

const IncomeMap = () => {
  const incomeData = useSelector((state) => state.dataReducer.Income);
  const dispatch = useDispatch();

  const handleDeleteIncome = (id) => {
    dispatch(deleteIncome(id));
  };
  return (
    <div className="ring-4 w-3/12 bg-gray-100">
      <h1 className="text-2xl text-center font-semibold">Income</h1>
      <div>
        {incomeData?.length > 0 ? (
          incomeData.map((ele, index) => (
            <div key={index} className="flex pt-5 px-2">
              <div className="flex gap-5 items-center">
                <h1 className="text-lg font-medium">{ele.amount}</h1>
                <h1 className="text-lg text-green-600 font-semibold">{ele.category}</h1>
                <div>
                <h1 className="text-xs">{ele.date}</h1>
                <h1 className="text-xs">{ele.time}</h1>

                </div>
                <button onClick={()=> handleDeleteIncome(ele.id)}><IoTrashBinSharp/></button>
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

export default IncomeMap;

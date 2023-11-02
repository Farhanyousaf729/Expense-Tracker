const addIncome = (x)=>{
    return { type:"ADD_INCOME" , payload: x}
}

const addExpense = (x)=>{
    return { type:"ADD_EXPENSE" , payload: x}
}

const deleteIncome = (incomeId) => {
    return {
      type: "DELETE_INCOME", payload: incomeId};
}
const deleteExpense = (expenseId) => {
    return {
      type: "DELETE_EXPENSE", payload: expenseId};
}

export {addIncome, addExpense, deleteExpense, deleteIncome};
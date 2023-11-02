const initialstate = {
  Income: [],
  Expense: [],
};

const dataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        Income: [...state.Income, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        Expense: [...state.Expense, action.payload],
      };

    case "DELETE_INCOME":
      return {
        ...state,
        Income: state.Income.filter(
          (income) => income.id !== action.payload
        )
      }

    case "DELETE_EXPENSE":
      return {
        ...state,
        Expense: state.Expense.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default dataReducer;

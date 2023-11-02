import './App.css';
import ExpenseMap from './component/ExpenseMap';
import Home from './component/Home';
import IncomeMap from './component/IncomeMap';

function App() {
  return (
   <div className='flex justify-evenly pt-20'>
    <IncomeMap/>
    <Home/>
    <ExpenseMap/>
   </div>
  );
}

export default App;

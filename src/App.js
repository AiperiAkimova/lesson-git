
import { useState } from 'react';
import './App.css';
import AddExpense from './components/addExpenses/AddExpense';
import ExpenseItem from './components/expenses/ExpenseItem';

function App() {
  const expenses =[
   
  ]
    
  const [data, setData] = useState(expenses)
  const saveData = (expense) =>{
    setData((prevState) => [...prevState, expense])
  }
  return (
  <div className="App">
    <AddExpense addExpense={saveData}/>
    {data.map((el)=>{
      return(
        <ExpenseItem 
        key={el.id}
        name={el.name} 
        age={el.age} />
      )
    })}
    
   
    </div>
  );
}

export default App;

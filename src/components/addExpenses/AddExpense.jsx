import ExpenseForm from "./ExpenseForm"
import './AddExpense.css'
const AddExpense = ({addExpense})=>{
    return(
        <div className="add-expense">
<ExpenseForm addHandler={addExpense}/>
        </div>
    )
}
export default AddExpense
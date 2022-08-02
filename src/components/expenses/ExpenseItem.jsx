
import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    // const [list, setList] = useState(expenses)
    // function deleteHandler(id){
    //     const newList = list.filter((item) => item.id == id)
    //     setList(newList)
    // }
    return(
        <div className="item">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            {/* <button onClick={()=>deleteHandler(props.id)}>Delete</button> */}
        </div>
    )
}
export default ExpenseItem
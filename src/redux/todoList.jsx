import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "./todoSlice";

const todoList = () => {
  const items= useSelector(state=>state.todos.tasks); //here whatever name you have given in the reducer that name should be given gere for todo reducer i have given "todos" in store.js file and also the name "items" should be same as the name given inside the initialState in todoSlice.js i.e., items
  const dispatch= useDispatch();
  console.log(items)
  return (
  <>
  
    <ul>
      {items && items.map((item)=>(
        <li key={item.id}>
          {item.text}
          <button onClick={()=>{ 
            console.log("Removing item with id:", item.id, "and text :",item.text);
            dispatch(removeTodo(item.id))}}>
              Delete
          </button>
        </li>

      ))}
      
    </ul>
  </>
  )
}

export default todoList
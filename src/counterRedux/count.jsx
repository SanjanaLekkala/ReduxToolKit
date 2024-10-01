import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const Count = () =>{
   
  const counts = useSelector(state=>state.counters.count); //here in the store.js file for the counter reducer i have given name as "counters" so same name should be given and also the name "count" should be same as the name given inside the initialState in the counterSlice.js i.e., "count"
  const dispatch = useDispatch();
  console.log(counts)
  

  return (
    <>
    <h1>{counts}</h1>
    <button onClick={()=>{
      dispatch(increment(5))
      }}>
        Increment
      </button>
    <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default Count
import { useRef, Suspense, lazy, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { addTodo } from "./redux/todoSlice";
// import TodoList from './redux/todoList';
import Count from "./counterRedux/count";
import ErrorBoundary from "./ErrorBoundary.jsx";

const TodoList = lazy(() => import("./redux/todoList"));

function App() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const todoAdded = () => {
    const task = inputRef.current.value.trim();
    console.log(task);
    if (task !== "") {
      setLoading(true);
      setTimeout(() => {
        dispatch(addTodo(task));
        inputRef.current.value = "";
        setLoading(false);
      }, 300);
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <h2>Total Todos : </h2>
      <input type="text" placeholder="Enter the Todo" ref={inputRef} />
      <button onClick={todoAdded} disabled={loading}>
        Add To Todo
      </button>
      {loading && <p style={{ color: "green" }}>Loading...</p>}
      <ErrorBoundary>
        <Suspense fallback={<p style={{ color: "red" }}>Loading ....</p>}>
          <TodoList />
        </Suspense>
      </ErrorBoundary>

      <div>
        <ErrorBoundary>
          <Count />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;

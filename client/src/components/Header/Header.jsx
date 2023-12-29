import "./Header.css";
import TodoForm from "../TodoForm/TodoForm";
import Todos from "../Todos/Todos";

const Header = () => {
  return (
    <div>
      <button
        type="button"
        style={{ position: "fixed", top: "0", right: "0", margin: "1.2rem" }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/home";
        }}
      >
        Logout
      </button>
      <h1>Todo List</h1>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </div>
  );
};

export default Header;

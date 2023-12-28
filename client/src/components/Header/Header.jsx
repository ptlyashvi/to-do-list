import "./Header.css"
import TodoForm from "../TodoForm/TodoForm"
import Todos from "../Todos/Todos"

const Header = () => {
    return (
        <div>
            <Header>
                <h1>Todo List</h1>
            </Header>
            <TodoForm></TodoForm>
            <Todos></Todos>
        </div>
    )

}

export default Header;
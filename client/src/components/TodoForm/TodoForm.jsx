import { useState } from "react";
import { addNewTodo } from '../redux/actions/index.js'
import { useDispatch } from "react-redux";
import "./TodoForm.css"


const TodoForm = () => {

    const [text, settext] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));

        settext('');
    }

    const onInputChange = (e) => {
        settext(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input placeholder="Enter name" className="input" onChange={onInputChange} value={text}>

            </input>
        </form>
    )
}

export default TodoForm;
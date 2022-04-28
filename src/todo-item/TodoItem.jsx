import React from "react";
import './TodoItem.css';

const TodoItem = (props) => { 
    const onComplete = () => alert('Completaste el Todo ' + props.text);
    const onDelete = () => alert('Eliminaste el Todo ' + props.text);
    

    return (
        <li className="TodoItem" >
            <span className={`Icon icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete} >C</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} `}  >{props.text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    )
}
export default TodoItem;
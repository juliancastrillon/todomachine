import React from "react";
import './TodoCounter.css'

const TodoCounter = ({total,completed}) => {
    return(
        <h2 className="TodoCounter" >Has Completado {completed} de {total} TODOs</h2>
    )
}
export default TodoCounter;
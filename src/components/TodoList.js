import React from 'react'

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const deleteTodo = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo);
    }

    const completeTodo = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;

            })

        )



    }

    return (
        <div>

            {todos.map((todo) => (

                <li className='list-item' key={todo.id}>

                    <input type="text" value={todo.title} className={`list ${todo.completed ? "completed" : ""} `} onChange={(event) => event.preventDefault()} />

                    <div>
                        <button className={`button-complete ${todo.completed ? "button-complted" : ""} `} onClick={() => completeTodo(todo)} >
                            <i className='fa fa-check-circle' ></i></button>

                    </div>
                    <div>
                        <button className='button-edit' onClick={() => editTodo(todo)} >
                            <i className='fa fa-edit' ></i></button>


                    </div>
                    <div>
                        <button className='button-delete' onClick={() => deleteTodo(todo)}   >
                            <i className='fa fa-trash' ></i></button>


                    </div>

                </li>

            ))}
        </div>
    )
}



export default TodoList

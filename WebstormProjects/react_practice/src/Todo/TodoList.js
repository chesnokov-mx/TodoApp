import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles ={
    ul:{
        listStyle: "none",
        padding: 0,
        margin: 0,
    }
}

function TodoList(props){
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) =>{
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        // time = {todo.time}
                        cT = {props.cT}
                        fT = {props.fT}
                    />
                );
            })}
        </ul>
    );
}

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onToggle: PropTypes.func.isRequired,
// }

export default TodoList;
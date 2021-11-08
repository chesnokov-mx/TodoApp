import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";
import AddTodo from "./AddTodo";
import ChangeItem from "./ChangeItem";

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem ({todo, index, onChange, cT, fT}) {
    const { removeTodo } = useContext(Context);
    const [enableChange, setEnableChange] = useState(false);
    const classes = []

    if(todo.completed === true){
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={todo.completed} style={styles.input} type="checkbox" onChange={() => onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
                <span style={{color: '#c28316'}}>{todo.time}</span>
            </span>
            <span>
            {/*<button className ='EnableChange' onClick={() => setEnableChange(true)} > &#916; </button>*/}
            {/*<button className='rm' onClick= {removeTodo.bind(null, todo.id) }>&times;</button>*/}
                {enableChange? <ChangeItem id = {todo.id} ct = {cT} offSet = {setEnableChange} fT = {fT}/>
                    : <span>
                    <button className ='EnableChange' onClick={() => setEnableChange(true)} > &#916; </button>
                    <button className='rm' onClick= {removeTodo.bind(null, todo.id) }>&times;</button>
                </span>
                }
            </span>
        </li>
    )
}

TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem;
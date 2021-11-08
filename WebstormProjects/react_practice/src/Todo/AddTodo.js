import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue);
    return{
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const AddTodo = ({onCreate, fT}) => {
    const Input = useInputValue('');

    function submitHandler(event){
        event.preventDefault();
        if(Input.value().trim()){
            if(fT(Input.value())) {
                onCreate(Input.value());
                Input.clear();
            }
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input type="text" {...Input.bind}/>
            <button type='submit' >
                Add todo
            </button>
        </form>
    );
};

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;
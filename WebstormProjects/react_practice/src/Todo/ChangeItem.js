import React, {useState} from 'react';

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


function ChangeItem (props) {
    const Input = useInputValue('');

    function changeItem(event) {
        event.preventDefault()
        if(Input.value().trim()){
            if(props.fT(Input.value())){
                props.ct(props.id, Input.value())
                Input.clear()
                props.offSet(false)
        }}
    }

    return(
        <form>
            <input type="text" {...Input.bind}/>
            <button onClick={changeItem}>
                Change
            </button>
        </form>

    )
}
export default ChangeItem;
import React, {useState} from 'react'


export default function TodoForm(props){

    const [formValue, setFormValue] = useState('')

    const onChange = event => {
        setFormValue(event.target.value)
        
    }

    const onSubmit = event => {
        event.preventDefault()

        props.dispatch({type: 'ADD_TASK', payload: formValue})

        setFormValue('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>New Task:&nbsp;</label>
                <input name='newTask' type='text' value={formValue} onChange={onChange} />
                <button>Add to List</button>
            </form>
            <button onClick={() => props.dispatch({ type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
        </div>
    )
}
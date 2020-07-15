import React from 'react'


export default function Todo(props) {
    // console.log('this is Todo props', props)
    return (
        <div onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.item.id})} >
            <h3 
                id={props.item.id}  
                className={props.item.completed ? 'completed' : 'incomplete'} 
            >
                {props.item.task}
            </h3>
        </div>
    )
}
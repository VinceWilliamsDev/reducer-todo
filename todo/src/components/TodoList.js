import React from 'react'
import Todo from'./Todo'

export default function TodoList(props) {
    console.log(props)

    return (
        <div>
            {props.state.map(item => {
                return(
                    <Todo key={item.id} item={item} dispatch={props.dispatch} />
                )
            })}
        </div>
    )
}

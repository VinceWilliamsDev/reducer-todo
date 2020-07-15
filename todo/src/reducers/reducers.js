export const initialState =[
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake a Cake',
            id: 1528817077287,
            completed: false
        }
    ]

export const reducer = (state, action) => {
    switch(action.type) {
        case ('TOGGLE_COMPLETED') :
            return (
                state.map( item => {
                    if ( item.id === action.payload ) {
                        return ({
                            ...item,
                            completed: !item.completed
                        })
                    } else {
                        return item
                    }
                })
            )
        case ('CLEAR_COMPLETED'): 
            return (
                state = state.filter( item => !item.completed )
            )
        case ('ADD_TASK'): 
            return (
                state = [
                    ...state, 
                    {
                        task: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ]
            )
        default: 
            return state
    }
}
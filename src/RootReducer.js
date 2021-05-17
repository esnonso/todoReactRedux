import { ADD_TODO, REMOVE_TODO, GET_TODO } from './ActionDispatch.js'
const initialState = {
    todos:[],
    id:0
}

 export default function rootReducer(state= initialState, action) {
    switch(action.type) {
        case GET_TODO:
            return {...state.todos, todos:action.data}
        case ADD_TODO: 
            return{
                ...state, todos:[state.todos, action.task]
            }
        case REMOVE_TODO:
            let todos = state.todos.filter(task => task._id !== action.id)
            return{
                ...state, todos
            }
        default:
            return state
    }
}
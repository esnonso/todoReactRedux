export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODO = "GET_TODO";
const url = "http://localhost:3001/api/todos/"

function handleGetTodo(data){
    return {
        type: GET_TODO,
        data
    }
}

 function handleAddTodo(task){
    return {
        type: ADD_TODO,
        task
    }
}

 function handleRemoveTodo(id){
    return {
        type: REMOVE_TODO,
        id
    }
}

export function getTodo(){
    return dispatch => {
        return fetch(url)
        .then(res => res.json())
        .then(data => dispatch(handleGetTodo(data)))
        .catch(err => console.log('SOMETHING WENT WRONG', err))
    };
}

export function addTodo(task) {
    return dispatch => {
        return fetch(url, {
            method:'post',
            headers: new Headers({
                 'Content-Type': 'application/json'
             }),
             body: JSON.stringify({ task })
        })
        .then(res => res.json())
        .then(data => handleAddTodo(data))
        .catch(err => console.log(err))
    }
}

export function removeTodo(id) {
    return dispatch => {
        fetch(url+id, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(todo => dispatch(handleRemoveTodo(id)))
        .catch(err => console.log(err))
    }
}
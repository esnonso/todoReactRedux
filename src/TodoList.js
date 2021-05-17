import React, { Component } from 'react';
import Todo from './Todos';
import Form from './TodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodo} from './ActionDispatch'
import { Route } from 'react-router-dom';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount(){
        this.props.getTodo()
    }

    handleAdd(task){
        this.props.addTodo(task)
        
    }

    removeTodo(id){
       this.props.removeTodo(id)
    }

    render() {
        const todos =this.props.todos.map((todo) => <Todo 
            key={todo._id} 
            todo={todo.task}
            removeTodo={this.removeTodo.bind(this, todo._id)} />)
        return(
            <div>
                <Route path="/todos/new" component={props => (
                    <Form {...props} handleSubmit={this.handleAdd} />
                )}/>
               <Route exact path="/todos" component={() => <div><ul>{todos}</ul></div>}/> 
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
   return{
        todos: reduxState.todos
   }
}


export default connect(mapStateToProps, { addTodo, removeTodo, getTodo })(TodoList);
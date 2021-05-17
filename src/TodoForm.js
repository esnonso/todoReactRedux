import React, { Component } from 'react';

 class Form extends Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            task:""
        }
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.task)
        e.target.reset()
        this.props.history.push("/todos")//This come from the {...props} we pass down to the addTodo react router
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input
                type="text" 
                name="task"
                id="task"
                 placeholder="enter a task"
                 onChange ={this.handleChange}
            />
            <button>Enter</button>
            </form>
        )
    }
}

export default Form;
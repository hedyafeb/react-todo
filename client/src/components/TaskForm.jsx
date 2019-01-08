import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import Moment from 'react-moment'
import axios from 'axios';


class TaskForm extends Component {
    state = {
        newTask: {
            title: "",
            due_date: ""
        }
    }

    handleChange = (event) => {
        // console.log(event.target);
        let newTask = this.state.newTask
        newTask[event.target.name] = event.target.value
        this.setState({
            newTask
        })
    }

    addTask = () => {
        axios({
            url: 'http://localhost:3000/tasks',
            method: 'POST',
            data: {
                title: this.state.newTask.title,
                due_date: this.state.newTask.due_date
            }
        })
        .then( response => {
            // console.log(response.data);
            this.props.addTask('dari Task Form') // ini emit props ke home
        })
        .catch( err => {
            console.log(err.response);
        })
    }

    render = function() {
        return (
            <div className="container p-4">
                <h3>Add New Task</h3>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input 
                            name="title"
                            value={this.state.newTask.title}
                            onChange={this.handleChange}
                            placeholder="input task title"
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Due Date</Label>
                        <Input 
                            type="date"
                            name="due_date"
                            value={this.state.newTask.due_date}
                            onChange={this.handleChange}
                        ></Input>
                    </FormGroup>
                    <Button 
                        onClick={this.addTask}
                        className="btn-sm"
                    >Add New</Button>
                </Form>
            </div>
        )
    }
}

export default TaskForm
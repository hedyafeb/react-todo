import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
import EditTask from '../components/EditTask'
import { Table, Button } from 'reactstrap'
import axios from 'axios'

class Home extends Component {
    state = {
        tasks: [],
        accesstoken: "",
        currentEditTask: {}
    }


    getTasks() {
        axios({
            url: 'http://localhost:3000/tasks',
            method: 'GET',
            headers: {
                accesstoken: `${this.state.accesstoken}`
            }
        })
        .then( response => {
            // console.log(response.data, 'ini yah?');
            this.setState({
                tasks: response.data.tasks
            })
        })
        .catch( err => {
            console.log(err.response);
        })
    }

    componentDidMount() {
        this.getTasks()
        // console.log(this.props.match, 'iniii');
        
    }

    delete = function(taskID) {
        // console.log(taskID, 'delete nihh');
        axios({
            url: `http://localhost:3000/tasks/${taskID}`,
            method: 'DELETE'
        })
        .then( response => {
            // console.log(response);
            this.getTasks()
        })
        .catch( err => {
            console.log(err.response);
        })
    }

    edit = function(task) {
        this.setState({
            currentEditTask: task
        })
        // console.log(this.state.currentEditTask, 'di homee - edit');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Route path="/tasks/addNew" 
                            render={() => 
                            <TaskForm addTask={this.getTasks.bind(this)}></TaskForm>}
                        ></Route>
                        <Route 
                            path={`/tasks/edit/:taskID`} 
                            render={() => 
                                <div>
                                    <EditTask 
                                        editTask={this.getTasks.bind(this)}
                                        task={this.state.currentEditTask}
                                        ></EditTask>
                                    {/* <h1></h1> */}
                                </div>
                            }
                        ></Route>
                        {/* <EditTask></EditTask> */}
                    </div>
                    <div className="col-8 container p-4">
                    <Link to="/tasks/addNew">
                        <Button className="btn-sm mb-3" color="info">Add New Task</Button>
                    </Link>
                    <h2>All Tasks</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Due Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tasks.map( task => {
                                    return (
                                        <Task 
                                            key={task._id} 
                                            task={task} 
                                            delete={this.delete.bind(this, task._id)}
                                            edit={this.edit.bind(this, task)}
                                        ></Task>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
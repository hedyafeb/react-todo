import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


class EditTask extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    // handleChange = () => {
    //     console.log(this, 'di editt');
    //     let task = this.props.task
    //     this.setState({
    //         task
    //     })
    // }

    componentDidUpdate = () => {
        console.log(this, 'udah di ediiiitttt');
        this.render()
    }

    editTask = () => {
        axios({
            url: "",
            method: "",
            data: {
                title: this.props.task, // sampeee siniii!
                // due_date: 
            }
        })
        .then( response => {
            console.log(response.data);
        })
        .catch( err => {
            console.log(err.response);
        })
    }
    

    render = () => {
        // console.log(this, 'di edit taskk')
        return (
            <div className="container p-4">
                <h3>Edit Task</h3>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input 
                            name="title"
                            value={this.props.task.title}
                            placeholder="input task title"
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Due Date</Label>
                        <Input 
                            // type="date" // ganti format date
                            name="due_date"
                            value={this.props.task.due_date}
                        ></Input>
                    </FormGroup>
                    <Button 
                        onClick={this.editTask}
                        className="btn-sm"
                    >Edit Task</Button>
                </Form>
            </div>
        )
    }
}

// EDITTT!!! sampe siniii!!!
export default EditTask
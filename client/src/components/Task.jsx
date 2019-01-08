import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Tasks extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.task.title}</td>
                <td>{this.props.task.due_date}</td>
                <td>
                    <Button 
                        className="mx-2 btn-sm"
                        color="primary"
                        onClick={this.props.delete}
                    >Done</Button>
                    <Link to={`/tasks/edit/${this.props.task._id}`}>
                        <Button 
                            className="btn-sm"
                            color="info"
                            onClick={this.props.edit}
                        >Edit</Button>
                    </Link>
                </td>
            </tr>
        )
    }
}

export default Tasks
import React, { Component } from 'react'
import {connect} from 'react-redux'


class EditComponent extends Component {

    handleEdit = (e) =>{
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
       
        const data = {
            newTitle,
            newMessage
        }

        this.props.dispatch({ type: 'UPDATE' , id: this.props.post.id, data: data})
    } 

    render() {
        return (
            <div>
                  <form onSubmit={this.handleEdit}>
                    {/* reefรับค่าจาก input  //รับค่าจาก parametor input เก็บใน properties */}
                    <input type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter post title" required />
                    <br></br><br></br>
                    <textarea cols="30" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message}  rows="5" placeholder="Enter Post" required />
                    <br></br><br></br>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComponent)

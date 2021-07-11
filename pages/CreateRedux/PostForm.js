import React, { Component } from 'react'

//ส่งข้อมูลไปเก็บใน store
import {connect} from 'react-redux'

class PostForm extends Component {

    //มีการรับ event และไม่ reset หน้าเว็บ
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        //ข้อมูลที่เก็บไว้ใน object
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        //การเพิ่มข้อมูล Adppost ส่งไป reducer
        //dispatch ฟังชั่นstore บอก reducer ว่าทำอะไรกับ state
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        //reset form
        this.getTitle.value = ""
        this.getMessage.value = ""
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* reefรับค่าจาก input  //รับค่าจาก parametor input เก็บใน properties */}
                    <input type="text" ref={(input) => this.getTitle = input} placeholder="Enter post title" required />
                    <br></br><br></br>
                    <textarea cols="30" ref={(input) => this.getMessage = input} rows="5" placeholder="Enter Post" required />
                    <br></br><br></br>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

//เชื่อมกับ store
export default connect()(PostForm)
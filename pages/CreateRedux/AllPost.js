import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import EditComponent from './EditComponent'

 class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Post</h1>
                {/* map ข้อมูลใน posts */}
                {this.props.posts.map( (post)=> (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post} /> : <Post key={post.id} post={post}/> }
                    </div>
                ))}
            </div>
        )
    }
}

//แปลง state store เป็น props
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);

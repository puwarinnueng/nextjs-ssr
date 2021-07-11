//post component
import React from 'react';
// check type properties
import PropTypes from 'prop-types';

//รับ propperties propใช้pasteข้อมูลระหว่างcomponent หลักการhtml attribute
//แสดงหน้า post ที่เพิ่มข้อมูล render ออกมา
function Post({id, title, deletePost}){
   return (
       <div className="Post">
          <button className="Post__delete" onClick={()=>deletePost(id)}>X</button>
          <div>
              <div className="Post__title">{title}</div>
              <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`}/>
          </div>
       
       </div>
   )
}


//check proplist
Post.prototype = {
     
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default Post;
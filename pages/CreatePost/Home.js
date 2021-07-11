//state เก็บข้อมูล component //สร้าง state
import React, { useState } from 'react';
import Input from './Input';
import Post from './Post';

let id = 1;




function Home() {

  //state ใช้จัดการข้อมูลใน component
  //ซ้าย inisial stateค่าเริ่มต้น[] //1state 2elementที่setstate(เปลี่ยนเป็นค่าใหม่) เพราะreturn array
  const [posts, setPosts] = useState([]) //เอา array post ไป render ใน post.js

  //state ใช้เก็บข้อมูล set เป็น array ตัวใหม่
  function addPost(title) {
    const newPost = { id: id, title: title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id){
    const updatedPosts = posts.filter((post)=>post.id != id);
    setPosts(updatedPosts);
  }

  //แสดงหน้า view
  return (
    <div className="App">

      {/* เรียกใช้prop เพื่อส่งค่าไปinput passค่าaddpost */}
      <Input addPost={addPost} />
      
      {/* เรียกออกมาแสดงแบบวน Post.js */}
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default Home;

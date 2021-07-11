 import React, { useState } from 'react';
import PropTypes from 'prop-types';

//ใช้propรับค่ามา รับค่าaddpostจาก app.js
function Input({ addPost }) {

   //เก็บค่าที่ user พิมเข้ามาเป็น post ใหม่
   const [input, setInput] = useState('');

   //event ถ้าuserพิมมา จะเปลี่ยนค่า default ของ input
   function onChange(event) {
      setInput(event.target.value);
   }

   //check ปุ่ม enter ถ้าใช้ จะเรียก addpost เพิ่ม post
   function onKeyDown(event) {
      //ดึงค่าuser ที่พิมเข้าไป
      const title = event.target.value;

      //ถ้า user กด enter
      if (event.key === 'Enter' && title) {
         //check ว่า title มีค่าไหม มีค่า ไปเรียก addpost
         addPost(title);
         //clear ค่า ที่ user พิม
         setInput('');
      }
   }



   return (
      <div className="Input">
         <div className="Input__header">Create Post</div>
         <input
            className="Input__field"
            type="text"
            //setค่าเริ่มต้นในการพิมuse state
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
         />
      </div>
   );
}

//proptype คือการเช็คประเภทข้อมูลของ user ที่ prop มา
//check addpost
Input.propTypes = {
   addPost: PropTypes.func.isRequired
   //func คือประเภทข้อมูล
};

export default Input;
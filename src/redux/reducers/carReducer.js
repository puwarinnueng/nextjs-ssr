
const carReducer = (state = [], action) => {
    switch (action.type) {
        //action เพิ่มข้อมูล
        case 'ADD_POST':
            //return state ตัวใหม่
            return state.concat([action.data])
        case 'DELETE_POST':
            return state.filter((post)=> post.id !== action.id);
        case 'EDIT_POST':
            // ...post ส่งข้อมูลเดิมจาก post
            return state.map((post) => post.id === action.id ? {...post, editing: !post.editing} :post )
        case 'UPDATE':
            return state.map((post)=>{
                if (post.id === action.id){
                    return{
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                }else return post;
            })
        default:
            //state ตัวเดิม [] เปล่า
            return state;
    }
}

export default carReducer;
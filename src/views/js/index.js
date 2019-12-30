import React,{useState} from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import '../css/index.css';

function Todos () {
    const [todos,setTodos] = useState([]);
    // 添加数据
    function addTodos(val){
        setTodos([...todos,{
            id: Date.now(),
            val,
            completed: false
        }])
    }
    // 监控每一项
    function changeCompleted(id,completed){
        todos.forEach(item=>{
            if(item.id==id){
                item.completed = completed
            };
        })
        setTodos([...todos]);
    }
    // 全选
    function changeAllCompleted(completed){
        todos.forEach(item=>{
            item.completed = completed
        })
        setTodos([...todos]);
    }
    // 删除每一项
    function remove(id){
        setTodos(todos.filter(item=>item.id!==id));
    }
    // 双击修改
    function changeEdit(id,val){
        todos.forEach(item=>{
            if(item.id==id){
                item.val = val
            };
        })
        setTodos([...todos]);
    }
    // 删除已完成
    function removCompleted(){
        setTodos(todos.filter(item=>!item.completed));
    }

    return (
        <div id="todoapp">
            <Header addTodos={addTodos} />
            <Main 
                todos={todos}
                changeCompleted={changeCompleted}
                remove={remove}
                changeEdit={changeEdit}
                changeAllCompleted={changeAllCompleted}
            />
            <Footer 
                todos={todos}
                removCompleted={removCompleted} 
            />
        </div>
    )
}

export default Todos;
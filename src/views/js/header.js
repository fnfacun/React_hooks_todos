import React, { useState } from "react";

function Header(props) {
    let { addTodos } = props;
    let [todo, setTodo] = useState("");
    return (
        <header>
            <h1>Todos</h1>
            <input
                id="new-todo"
                type="text"
                placeholder="What needs to be done?"
                value={todo}
                onChange={(e)=>{
                    setTodo(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode==13){
                        if(!todo.trim()){
                            alert("请输入内容")
                        }else{
                            addTodos(todo);
                            setTodo("");
                        };
                    };
                }}
            />
        </header>
    )
};

export default Header;
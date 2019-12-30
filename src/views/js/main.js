import React, { useState, useEffect, useRef } from "react";

function Main(props) {
    let { todos,changeAllCompleted } = props;
    let completed = todos.filter(item => item.completed);
    return (
        <section id="main" style={{ display: todos.length ? "block" : "none" }}>
            <input
                id="toggle-all"
                type="checkbox"
                checked={completed.length==todos.length}
                onChange={(e)=>{
                    changeAllCompleted(e.target.checked)
                }}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            {todos.map(item => <Li key={item.id} inner={item} {...props} />)}
        </section>
    )
};

function Li(props) {
    let { inner, changeCompleted, remove, changeEdit } = props;
    let [edit, setEdit] = useState(false);
    let editEl = useRef();
    useEffect(() => {
        if (edit) {
            editEl.current.select();
        } else {
            if (!inner.val.trim()) {
                setEdit(true);
            };
        };
    }, [edit])
    return (
        <ul id="todo-list">
            <li className={inner.completed ? "done" : "none"}>
                <div className="view" style={{ display: edit ? "none" : "block" }}>
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={inner.completed}
                        onChange={(e)=>{
                            changeCompleted(inner.id, e.target.checked)
                        }}
                    />
                    <label onDoubleClick={() => {
                        setEdit(true)
                    }}>{inner.val}</label>
                    <a
                        className="destroy"
                        onClick={()=>{
                            remove(inner.id)
                        }}
                    ></a>
                </div>
                <input
                    className="edit"
                    type="text"
                    ref={editEl}
                    value={inner.val}
                    style={{ display: edit ? "block" : "none" }}
                    onBlur={() => {
                        setEdit(false)
                    }}
                    onChange={(e) => {
                        changeEdit(inner.id, e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if(e.keyCode==13){
                            !inner.val.trim()?setEdit(true): setEdit(false)
                        }
                    }}
                />
            </li>
        </ul>
    )
}

export default Main;
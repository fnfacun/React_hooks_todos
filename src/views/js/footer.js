import React from "react";

function Footer(props) {
    let { todos, removCompleted } = props;
    // 已完成
    let completed = todos.filter(item => item.completed);
    // 未完成
    let unCompleted = todos.filter(item => !item.completed);
    return (
        <footer style={{ display: todos.length > 0 ? "block" : "none" }}>
            <a 
                id="clear-completed"
                style={{
                    display: completed.length > 0 ? "block" : "none"
                }}
                onClick={()=>{
                    removCompleted()
                }}
            >
                Clear {completed.length} completeditem
            </a>
            <div 
                id="todo-count"
                style={{
                    display: unCompleted.length > 0 ? "block" : "none"
                }}
            >{unCompleted.length} items left</div>
        </footer>
    )
};

export default Footer;
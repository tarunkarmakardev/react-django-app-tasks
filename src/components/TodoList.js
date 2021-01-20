import React from "react";
import styles from "../css/TodoList.module.css";

export default function TodoList(props) {
  return (
    <div className={styles.todoListContainer}>
      <ul className={styles.todoList}>
        {props.items.map((item) => {
          return (
            <li key={item.id} className={styles.todoListItem}>
              <i className="fas fa-angle-double-right"></i>
              <span className="todo-items-list-item-text">{item.value}</span>
              <i
                className={`far fa-trash-alt ${styles.todoDelete}`}
                onClick={() => props.deleteTask(item.id)}
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

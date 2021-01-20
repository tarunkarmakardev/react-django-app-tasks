import React, { useState } from "react";
import styles from "../css/TodoInput.module.css";

export default function TodoInput(props) {
  let [inputText, setInputText] = useState("");

  const addTask = () => {
    props.addTask(inputText);
    setInputText("");
  };
  return (
    <>
      <div className={styles.todoInputContainer}>
        <input
          type="text"
          placeholder="Enter your tasks"
          className={styles.todoInput}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button className={styles.todoSubmit} onClick={addTask}>
          +
        </button>
      </div>
    </>
  );
}

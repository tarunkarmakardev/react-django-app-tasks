import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Heading from "./components/Heading";
import "./css/MainApp.css";

function MainApp() {
  let [listItems, setListItems] = useState([]);
  const url = "https://tasks-todo-app.herokuapp.com/tasks/";

  const fetchTasks = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListItems(data);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ value: data }),
    })
      .then((res) => {
        fetchTasks();

        return res.json();
      })
      .then((data) => {
        // console.log(data.message);
      });
  };

  const deleteTask = (id) => {
    fetch(`${url}${String(id)}`, {
      method: "DELETE",
    })
      .then((res) => {
        fetchTasks();
        return res.json();
      })
      .then((data) => {
        // console.log(data.message);
      });
  };

  return (
    <>
      <div className="body bg-alpha">
        <div className="main-container">
          <Heading text="Got any tasks?" />

          <TodoInput setListItems={setListItems} addTask={addTask} />

          <TodoList
            items={listItems}
            setListItems={setListItems}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default MainApp;

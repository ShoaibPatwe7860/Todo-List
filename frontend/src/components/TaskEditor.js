import React, { useState } from "react";
import axios from "axios";

function TaskEditor({ task, onCancel, onSave }) {
  const [taskName, setTaskName] = useState(task.name);
  const [taskCompleted, setTaskCompleted] = useState(task.complete);

  const editTask = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/tasks/${task._id}`, {
        name: taskName,
        complete: taskCompleted,
      });
      onCancel();
      onSave();
    } catch (error) {
      console.error("An error occurred while editing the task:", error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={editTask} className="edit-form">
        <label className="edit-label">Task ID: {task._id}</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="edit-input"
        />
        {/* <input
          type="checkbox"
          checked={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.checked)}
          className="checkbox-input"
        /> */}
        <button type="submit" id="edit-btn" className="btn btn-success">
          Save
        </button>
        <button onClick={onCancel} id="close-btn" className="btn btn-danger">
          Close
        </button>
      </form>
    </div>
  );
}

export default TaskEditor;

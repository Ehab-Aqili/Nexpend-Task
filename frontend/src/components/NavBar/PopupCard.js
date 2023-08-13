import axios from "axios";
import React, { useState } from "react";
import "./PopupCard.css";
const PopupCard = ({ onClose, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTask, setSubTask] = useState([]);
  const [multiTask, setMultiTask] = useState([]);
  const [status, setStatus] = useState();
  const [res, setRes] = useState("");
  const subTasks = () => {
    if (subTask.trim() === "") {
      return;
    }
    const newTask = { text: subTask, index: multiTask.length };
    multiTask.push(newTask);
    setMultiTask([...multiTask]);
    setSubTask("");
  };

  const removeSubTask = (indexToRemove) => {
    const updatedTasks = multiTask.filter(
      (task) => task.index !== indexToRemove
    );
    setMultiTask(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8080/add-card", {
        title: title,
        description: description,
        subtasks: multiTask,
        status: status,
      })
      .then((response) => {
        setRes(response);
        onClose();
        setStatus("");
        setSubTask("");
        setDescription("");
        setTitle("");
      })
      .catch((err) => {
        console.log("Error adding Cards:", err);
      });
  };

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelDescription = (e) => {
    setDescription(e.target.value);
  };
  const handelSubtask = (e) => {
    setSubTask(e.target.value);
  };
  const handelStatus = (e) => {
    setStatus(e.target.value);
  };
  // console.log(status)

  return (
    <div className="popup-overlay">
      <div className="popup">
      <div className=" d-flex justify-content-end ">
        <button className=" btn btn-secondary" onClick={onClose}>
          X
        </button>
        </div>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                onChange={handelTitle}
                value={title}
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                onChange={handelDescription}
                value={description}
                className="form-control"
                id="description"
                name="description"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="subtasks" className="form-label">
                Subtasks
              </label>
              <input
                onChange={handelSubtask}
                value={subTask}
                className="form-control"
                id="subtasks"
                name="subtasks"
                rows="3"
                placeholder="Enter subtasks"
              ></input>
              <div className="row justify-content-center gap-1   py-2">
                {multiTask.map((task, index) => (
                  <div
                    className="ps-2 border d-flex align-items-center justify-content-between  subtasks "
                    key={index}
                  >
                    <span>{task.text}</span>
                    <span
                      className=" btn__border"
                      onClick={() => removeSubTask(task.index)}
                    >
                      X
                    </span>
                  </div>
                ))}
              </div>
              <button className="btn btn__add__card" onClick={subTasks}>
                Add Subtask
              </button>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                onChange={handelStatus}
                value={status}
                id="status"
                name="status"
              >
                <option value="choose">Choose</option>
                {data.map((opt, index) => {
                  return (
                    <option key={index} value={opt.name}>
                      {opt.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {res !== "" ? (
              <span style={{ color: "green" }}>Add Cards Successfully</span>
            ) : null}
            <button type="submit" className="btn btn-success btn__border">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;

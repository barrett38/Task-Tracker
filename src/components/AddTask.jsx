import { useState } from "react";

const AddTask = ({ setTasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000) + 1,
      text,
      day,
      reminder,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          className="form-control"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Day & Time</label>
        <input
          className="form-control"
          type="date"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <p>{task.day}</p>
        <button
          className="font-cabin"
          style={{ color: "red" }}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </h3>
    </div>
  );
};

export default Task;

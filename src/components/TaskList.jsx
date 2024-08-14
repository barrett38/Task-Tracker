import Task from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ))
      ) : (
        <p>No Tasks To Show</p>
      )}
    </>
  );
};

export default TaskList;

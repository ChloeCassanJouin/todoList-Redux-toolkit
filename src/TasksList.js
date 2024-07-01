import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
  const tasks = useSelector(state => state.todo);
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;

/*CODE REACT PUR
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  return (
    <>
      {props.tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;*/
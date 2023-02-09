import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="task tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${
                    task.done && hideDone
                    ? " tasks__item--hidden" 
                    : ""}`
                }
            >
                <button className={'done tasks__buttonDone'}>
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "tasks__item--done" : "tasks__value"}>
                    {task.content}
                </span>
                <button className={`remove tasks__buttonRemove`}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;

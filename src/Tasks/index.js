import "./style.css";

const Tasks = (props) => (
    <ul className="task tasks">
        {props.tasks.map(task => (
            <li
                className={`tasks__item ${task.done && props.hideDone ? " tasks__item--hidden" : ""}>`}
            >
                <button className={'done tasks__buttonDone'}>
                    {task.done ? "✔" : ""}
                </button>
                <span className={`task.done ? "tasks__item--done" : "tasks__value"`}>
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

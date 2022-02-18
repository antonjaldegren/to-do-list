import React from "react";
import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, toggleTask, removeTask }) {
	return (
		<main className={styles.main}>
			{tasks.map((task) => (
				<Task
					key={task.id}
					data={task}
					toggleTask={toggleTask}
					removeTask={removeTask}
				/>
			))}
		</main>
	);
}

export default TaskList;

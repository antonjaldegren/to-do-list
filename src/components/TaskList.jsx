import React from "react";
import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList(props) {
	const { tasks, toggleTask, removeTask } = props;

	const taskList = tasks.map((task) => (
		<Task
			key={task.id}
			data={task}
			toggleTask={toggleTask}
			removeTask={removeTask}
		/>
	));

	return (
		<main className={styles.main}>
			{tasks.length > 0 ? (
				taskList
			) : (
				<p className={styles["no-added"]}>No tasks added</p>
			)}
		</main>
	);
}

export default TaskList;

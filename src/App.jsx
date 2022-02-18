import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

import MainTitle from "./components/MainTitle";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	function createTask(title) {
		setTasks((prevtasks) => [
			...prevtasks,
			{
				title: title,
				id: uuidv4(),
				isCompleted: false,
			},
		]);
	}

	function toggleTask(id) {
		setTasks(
			[...tasks].map((task) => {
				return task.id !== id
					? task
					: { ...task, isCompleted: !task.isCompleted };
			})
		);
	}

	function removeTask(id) {
		return setTasks(tasks.filter((task) => task.id !== id));
	}

	return (
		<div className={styles.app}>
			<MainTitle text="TO-DO LIST" />
			<InputBox createTask={createTask} />
			{tasks.length > 0 ? (
				<TaskList
					tasks={tasks}
					toggleTask={toggleTask}
					removeTask={removeTask}
				/>
			) : null}
		</div>
	);
}

export default App;

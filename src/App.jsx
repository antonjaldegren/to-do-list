import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

import MainTitle from "./components/MainTitle";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	function createTask(title) {
		const newTask = {
			title: title,
			id: uuidv4(),
			isCompleted: false,
		};

		setTasks((prevtasks) => [...prevtasks, newTask]);
	}

	function toggleTask(id, isChecked) {
		setTasks(
			[...tasks].map((task) => {
				if (task.id !== id) return task;

				task.isCompleted = isChecked;

				return task;
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
			<TaskList
				tasks={tasks}
				toggleTask={toggleTask}
				removeTask={removeTask}
			/>
		</div>
	);
}

export default App;

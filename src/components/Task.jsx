import React from "react";
import styles from "./Task.module.css";

function Task(props) {
	const {
		data: { id, title, isCompleted },
		toggleTask,
		removeTask,
	} = props;

	return (
		<section className={styles.section}>
			<div className={styles["title-container"]}>
				<input
					className={styles.check}
					type="checkbox"
					onChange={() => toggleTask(id)}
				/>
				<h2
					className={`${styles.title} ${
						isCompleted ? styles.completed : null
					}`}
				>
					{title}
				</h2>
			</div>
			<div
				className={styles["remove-button"]}
				onClick={() => removeTask(id)}
			></div>
		</section>
	);
}

export default Task;

import React from "react";
import styles from "./Activity.module.css";
import x from "../x.svg";

function Activity(props) {
	const {
		data: { id, title, daysCompleted },
		toggleDay,
		removeActivity,
	} = props;

	function handleRemove() {
		removeActivity(id);
	}

	return (
		<section className={styles.section}>
			<div className={styles["title-container"]}>
				<input className={styles.check} type="checkbox" />
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div
				className={styles["remove-button"]}
				onClick={handleRemove}
			></div>
		</section>
	);
}

export default Activity;

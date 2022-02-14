import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";

import MainTitle from "./components/MainTitle";
import InputBox from "./components/InputBox";
import ActivityList from "./components/ActivityList";

function App() {
	const [activities, setActivities] = useState(() => getActivities());

	useEffect(() => console.log("App mounted"), []);

	// Handle activities:
	function createActivity(title) {
		const newActivity = {
			title: title,
			id: uuidv4(),
			daysCompleted: [],
		};

		setActivities((prevActivities) => [...prevActivities, newActivity]);
	}

	function toggleDay(id, day) {
		setActivities(
			[...activities].map((activity) => {
				if (activity.id !== id) return activity;

				const index = activity.daysCompleted.indexOf(day);
				index > -1
					? activity.daysCompleted.splice(index, 1)
					: activity.daysCompleted.push(day);

				return activity;
			})
		);
	}

	function removeActivity(id) {
		return setActivities(
			activities.filter((activity) => activity.id !== id)
		);
	}

	// Handle local storage:
	function getActivities() {
		return JSON.parse(window.localStorage.getItem("myActivities")) || [];
	}

	function saveActivities() {
		const data = JSON.stringify(activities);
		window.localStorage.setItem("myActivities", data);
	}

	function clearActivities() {
		window.localStorage.removeItem("myActivities");
		setActivities([]);
	}

	return (
		<div className={styles.app}>
			<MainTitle text="TO-DO LIST" />
			<InputBox
				createActivity={createActivity}
				saveActivities={saveActivities}
				clearActivities={clearActivities}
			/>
			<ActivityList
				activities={activities}
				toggleDay={toggleDay}
				removeActivity={removeActivity}
			/>
		</div>
	);
}

export default App;

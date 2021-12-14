import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import About from './components/pages/About';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};

		getTasks();
		// eslint-disable-next-line
	}, []);

	// Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch('./tasks');
		const data = await res.json();
		return data;
	};

	// Fetch Task
	const fetchTask = async (id) => {
		const res = await fetch(`./tasks/${id}`);
		const data = await res.json();
		return data;
	};

	const addTask = async (task) => {
		const res = await fetch('./tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		setTasks([...tasks, data]);
	};

	// Delete task
	const deleteTask = async (id) => {
		await fetch(`./tasks/${id}`, {
			method: 'DELETE',
		});
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`./tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTask),
		});
		const data = await res.json();

		setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
	};

	return (
		<Router>
			<div className='container'>
				<Header
					show={showAddTask}
					onShow={() => setShowAddTask(!showAddTask)}
				/>

				<Routes>
					<Route
						path='/'
						element={
							<Home
								showAddTask={showAddTask}
								addTask={addTask}
								tasks={tasks}
								deleteTask={deleteTask}
								toggleReminder={toggleReminder}
							/>
						}
					/>
					<Route path='/about' element={<About />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
};

export default App;

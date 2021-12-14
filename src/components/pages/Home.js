import AddTask from '../tasks/AddTask';
import Tasks from '../tasks/Tasks';

const Home = ({ showAddTask, addTask, tasks, deleteTask, toggleReminder }) => {
	return (
		<>
			{showAddTask && <AddTask addTask={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					deleteTask={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				<h3>No Tasks To Show</h3>
			)}
		</>
	);
};

export default Home;

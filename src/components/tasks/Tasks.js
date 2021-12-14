import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, deleteTask, onToggle }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					onToggle={onToggle}
				/>
			))}
		</ul>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	deleteTask: PropTypes.func.isRequired,
};

export default Tasks;

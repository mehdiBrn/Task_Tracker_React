import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TaskItem = ({
	task: { id, text, day, reminder },
	deleteTask,
	onToggle,
}) => {
	return (
		<li
			onDoubleClick={() => onToggle(id)}
			className={reminder ? 'task reminder' : 'task'}>
			<h3>
				{text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => deleteTask(id)}
				/>
			</h3>
			<p>{day}</p>
		</li>
	);
};

TaskItem.propTypes = {
	task: PropTypes.object.isRequired,
	deleteTask: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default TaskItem;

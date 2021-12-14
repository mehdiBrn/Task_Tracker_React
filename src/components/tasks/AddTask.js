import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Please add a task');
			return;
		}

		addTask({ text, day, reminder });

		// Clear fields
		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label htmlFor='task'>Task</label>
				<input
					id='task'
					type='text'
					placeholder='Add Task'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label htmlFor='day'>Day and Time</label>
				<input
					id='day'
					type='text'
					placeholder='Add Day and Time'
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className='form-control form-control-check'>
				<label htmlFor='reminder'>Set Reminder</label>
				<input
					id='task'
					type='checkbox'
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	);
};

AddTask.propTypes = {
	addTask: PropTypes.func.isRequired,
};

export default AddTask;

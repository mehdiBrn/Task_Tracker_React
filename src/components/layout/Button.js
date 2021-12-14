import PropTypes from 'prop-types';

const Button = ({ color, text, onShow }) => {
	return (
		<button onClick={onShow} style={{ backgroundColor: color }} className='btn'>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'steeblue',
	text: 'Add',
};

Button.propTypes = {
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onShow: PropTypes.func.isRequired,
};

export default Button;

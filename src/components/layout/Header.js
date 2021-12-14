import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, show, onShow }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button
				color={show ? 'red' : 'green'}
				text={show ? 'Close' : 'Add'}
				onShow={onShow}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string,
	show: PropTypes.bool,
	onShow: PropTypes.func.isRequired,
};

export default Header;

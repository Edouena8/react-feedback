import PropTypes from 'prop-types';
import { BtnList } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
            {options.map((option, idx) => (
                <li key={idx}>
                    <button onClick={() => onLeaveFeedback(idx)}>{option}</button>
                </li>
            ))}
        </BtnList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
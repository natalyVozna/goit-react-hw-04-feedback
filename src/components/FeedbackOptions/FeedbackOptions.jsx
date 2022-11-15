import { Button } from 'components/Button/Button';
import { ButtonsBox } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { CgSmile, CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const iconArr = [CgSmile, CgSmileNeutral, CgSmileSad];
  console.log(options);
  return (
    <ButtonsBox>
      {options.map((option, index) => (
        <Button
          key={option}
          icon={iconArr[index]}
          onClickHandle={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { ButtonsBox } from './FeedbackOptions.styled';
import { CgSmile, CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const iconArr = [CgSmile, CgSmileNeutral, CgSmileSad];

  return (
    <ButtonsBox>
      {options.map(
        (option, index) =>
          index < 3 && (
            <Button
              key={option}
              icon={iconArr[index]}
              name={option}
              onClickHandle={onLeaveFeedback}
            >
              {option}
            </Button>
          )
      )}
    </ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

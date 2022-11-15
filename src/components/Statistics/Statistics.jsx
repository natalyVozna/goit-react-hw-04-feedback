import { Container, StatItem, SubTitle, StatList } from './Statistics.styled';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  visible,
}) => {
  return (
    <Container>
      <SubTitle>Statistics</SubTitle>
      {visible ? (
        <StatList>
          <StatItem>
            Good: <span>{good}</span>
          </StatItem>
          <StatItem>
            Neutral: <span>{neutral}</span>
          </StatItem>
          <StatItem>
            Bad: <span>{bad}</span>
          </StatItem>
          <StatItem>
            Total: <span>{total}</span>
          </StatItem>
          <StatItem>
            Positive Feedback:
            <span>{positivePercentage}%</span>
          </StatItem>
        </StatList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

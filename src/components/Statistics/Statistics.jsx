import { Container, StatItem, SubTitle, StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <SubTitle>Statistics</SubTitle>
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
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

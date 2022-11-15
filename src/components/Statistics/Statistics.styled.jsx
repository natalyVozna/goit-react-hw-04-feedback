import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 0 15px;
  color: var(--title);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.6;
  letter-spacing: 0.03em;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const StatItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.6;

  span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 27px;
    color: var(--accent);
  }
`;

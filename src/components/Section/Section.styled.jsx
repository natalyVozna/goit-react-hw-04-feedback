import styled from 'styled-components';

export const Container = styled.div`
  min-width: 600px;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 40px;
  flex-direction: column;
  background-color: var(--green);
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  color: var(--title);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.6;
`;

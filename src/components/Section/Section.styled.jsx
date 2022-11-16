import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 40px auto;

  display: flex;
  align-items: flex-start;
  padding: 40px;
  flex-direction: column;
  background-color: var(--green);
  border-radius: 6px;
  box-shadow: 1px 2px 6px 0px rgba(33, 33, 33, 0.5);
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

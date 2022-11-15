import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid var(--accent);
  border-radius: 3px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: var(--title);
  background-color: var(--background);
  transition: box-shadow 250ms var(--timing-function);

  :hover {
    box-shadow: 1px 2px 6px 1px rgb(144, 56, 168);
  }
`;

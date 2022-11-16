import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid var(--accent);
  border-radius: 3px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: var(--title);
  background-color: var(--background);
  transition: box-shadow 250ms var(--timing-function);

  :hover {
    box-shadow: 1px 2px 6px 1px rgb(144, 56, 168);
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 5px;
    position: relative;

    z-index: -1;
    color: var(--accent);
  }
`;

import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {/* <Title>Please leave feedback</Title> */}
      {children}
    </Container>
  );
};

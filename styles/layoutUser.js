import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background: ${(props) => props.theme.bg.primary};
`;

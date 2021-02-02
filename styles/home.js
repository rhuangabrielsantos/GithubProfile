import styled from 'styled-components';
import { FaSearch, FaGithub } from 'react-icons/fa';

export const Input = styled.input`
  width: 15rem;
  height: 2rem;

  border: 0;
  border-radius: 0.4rem;

  font-size: 20px;
  padding: 0.3rem;

  outline: none;

  @media (min-width: 800px) {
    width: 20rem;
  }
`;

export const Button = styled.button`
  background: ${(prop) => prop.theme.bg.secondary};
  color: ${(prop) => prop.theme.color.white};

  width: 2.2rem;
  height: 2.2rem;

  border: 0;
  border-radius: 0.4rem;

  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  outline: none;

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`;

export const Search = styled(FaSearch)`
  width: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  margin-bottom: 5rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GitHub = styled(FaGithub)`
  width: 10rem;
  height: 10rem;

  color: ${(prop) => prop.theme.color.white};

  @media (min-width: 800px) {
    margin-right: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 2rem;

  color: ${(prop) => prop.theme.color.white};

  @media (min-width: 800px) {
    font-size: 5rem;
  }
`;

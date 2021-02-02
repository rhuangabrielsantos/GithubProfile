import styled from 'styled-components';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCodepen,
  FaHeart,
} from 'react-icons/fa';

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  position: absolute;
  bottom: 5rem;
`;

export const GitHub = styled(FaGithub)`
  text-decoration: none;
  color: ${(prop) => prop.theme.bg.tertiary};

  font-size: 35px;

  margin: 0 0.5rem;

  transition: 0.4s;

  &:hover {
    color: ${(prop) => prop.theme.color.white};
  }
`;

export const Linkedin = styled(FaLinkedin)`
  text-decoration: none;
  color: ${(prop) => prop.theme.bg.tertiary};

  font-size: 35px;

  margin: 0 0.5rem;

  transition: 0.4s;

  &:hover {
    color: ${(prop) => prop.theme.color.white};
  }
`;

export const Twitter = styled(FaTwitter)`
  text-decoration: none;
  color: ${(prop) => prop.theme.bg.tertiary};

  font-size: 35px;

  margin: 0 0.5rem;

  transition: 0.4s;

  &:hover {
    color: ${(prop) => prop.theme.color.white};
  }
`;

export const Codepen = styled(FaCodepen)`
  text-decoration: none;
  color: ${(prop) => prop.theme.bg.tertiary};

  font-size: 35px;

  margin: 0 0.5rem;

  transition: 0.4s;

  &:hover {
    color: ${(prop) => prop.theme.color.white};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
`;

export const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 1rem;

  color: ${(prop) => prop.theme.color.white};
`;

export const Hearth = styled(FaHeart)`
  margin-left: 0.3rem;
  color: ${(prop) => prop.theme.color.red};
`;

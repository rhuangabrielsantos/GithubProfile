import styled from 'styled-components';
import {
  FaRegBuilding,
  FaLink,
  FaMapMarkerAlt,
  FaUser,
  FaChevronLeft,
  FaCode,
  FaJsSquare,
  FaPhp,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaDocker,
  FaStar,
  FaJava,
  FaCuttlefish,
  FaVuejs,
  FaCodeBranch,
  FaEye,
} from 'react-icons/fa';
import Image from 'next/image';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.7rem;
`;

export const Avatar = styled(Image)`
  border-radius: 10rem;
`;

export const Name = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 1.5rem;

  color: ${(props) => props.theme.color.white};

  text-align: center;

  margin-top: 1rem;
`;

export const Description = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 1rem;

  color: ${(props) => props.theme.color.white};

  text-align: ${(props) => (props.center ? 'center' : 'initial')};

  margin-left: 0.5rem;
`;

export const CompanyIcon = styled(FaRegBuilding)`
  color: ${(props) => props.theme.color.white};
`;

export const LinkIcon = styled(FaLink)`
  color: ${(props) => props.theme.color.white};
`;

export const MapIcon = styled(FaMapMarkerAlt)`
  color: ${(props) => props.theme.color.white};
`;

export const UserIcon = styled(FaUser)`
  color: ${(props) => props.theme.color.white};
`;

export const BackIcon = styled(FaChevronLeft)`
  color: ${(props) => props.theme.color.white};

  width: 2rem;
  height: 2rem;

  position: absolute;
  top: 2rem;
  left: 2rem;

  cursor: pointer;

  transition: 0.4s;

  z-index: 10;

  &:hover {
    color: ${(props) => props.theme.bg.tertiary};
  }
`;

export const Profile = styled.div`
  width: 23rem;
  height: 100vh;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.bg.secondary};
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);

  margin-right: 2rem;
  margin-top: 5vh;

  overflow-y: scroll;
  height: 95vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RepositoryBox = styled.div`
  width: 29rem;
  height: 7rem;

  border-radius: 0.5rem;

  margin: 0.3rem;

  padding-top: 1rem;

  border: 0.2rem solid ${(props) => props.theme.bg.secondary};
`;

export const CodeIcon = styled(FaCode)`
  width: 1.2rem;
  height: 1.2rem;

  color: ${(props) => props.theme.color.grey};
`;

export const RepositoryHeader = styled.div`
  display: flex;
  padding-left: 1rem;
`;

export const RepositoryName = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 1rem;

  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${(props) => props.theme.color.blue};
  padding-left: 0.5rem;

  &:hover {
    text-decoration: underline;

    cursor: pointer;
  }
`;

export const RepositoryBody = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RepositoryDescription = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  color: ${(props) => props.theme.color.grey};

  max-width: 60ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RepositoryLanguages = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;

  color: ${(props) => props.theme.color.grey};

  display: flex;
  align-items: center;
`;

export const JavaScriptIcon = styled(FaJsSquare)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const JavaIcon = styled(FaJava)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const CIcon = styled(FaCuttlefish)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const VueIcon = styled(FaVuejs)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const ForkIcon = styled(FaCodeBranch)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const WatchersIcon = styled(FaEye)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const PHPIcon = styled(FaPhp)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const SCSSIcon = styled(FaSass)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const CSSIcon = styled(FaCss3Alt)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const HTMLIcon = styled(FaHtml5)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const TypeScriptIcon = styled(FaJsSquare)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const DockerIcon = styled(FaDocker)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.3rem;
`;

export const RepositoryFooter = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StarIcon = styled(FaStar)`
  color: ${(props) => props.theme.color.grey};
  margin-right: 0.3rem;
`;

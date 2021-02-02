import styled, { keyframes } from 'styled-components';
import {
  FaCircleNotch,
  FaRegBuilding,
  FaLink,
  FaMapMarkerAlt,
  FaUser,
  FaChevronLeft
} from 'react-icons/fa';
import Image from 'next/image';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled(FaCircleNotch)`
  animation: ${rotate} infinite 1s linear;

  width: 10rem;
  height: 10rem;
`;

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
  font-size: 2rem;

  color: ${(props) => props.theme.color.white};

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
`;

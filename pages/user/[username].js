import { useRouter } from 'next/router';
import { FaCircleNotch } from 'react-icons/fa';

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import Layout from '../../components/Layout';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FaCircleNotch)`
  animation: ${rotate} infinite 1s linear;

  width: 10rem;
  height: 10rem;
`;

function User({ githubProfile }) {
  console.log(githubProfile);

  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <Image
        src={githubProfile.avatar_url}
        alt="Avatar"
        width={100}
        height={100}
      />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { username: 'rhuangabrielsantos' } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.username}`);
  const githubProfile = await res.json();

  return {
    props: {
      githubProfile,
    },
  };
}

export default User;

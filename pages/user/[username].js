import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/Layout';

import {
  Spinner,
  Avatar,
  Name,
  Box,
  Description,
  CompanyIcon,
  LinkIcon,
  MapIcon,
  UserIcon,
  BackIcon,
  Img,
} from '../../styles/user';

function User({ githubProfile }) {
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
      <Link href="/">
        <BackIcon />
      </Link>

      <Box>
        <Avatar
          src={githubProfile.avatar_url}
          alt="Avatar"
          width={170}
          height={170}
        />
      </Box>
      <Box>
        <Name>{githubProfile.name}</Name>
      </Box>

      <Box>
        <Description center>
          <UserIcon /> {githubProfile.followers} followers ·{' '}
          {githubProfile.following} following
        </Description>
      </Box>

      <Box>
        <Description center>{githubProfile.bio}</Description>
      </Box>

      <Box>
        <CompanyIcon />
        <Description>{githubProfile.company}</Description>
      </Box>

      <Box>
        <MapIcon />
        <Description>{githubProfile.location}</Description>
      </Box>

      <Box>
        <LinkIcon />
        <Description>{githubProfile.blog}</Description>
      </Box>
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

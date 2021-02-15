import Link from 'next/link';

import LayoutUser from '../../components/LayoutUser';

import {
  Avatar,
  Name,
  Box,
  Description,
  CompanyIcon,
  LinkIcon,
  MapIcon,
  UserIcon,
  BackIcon,
  Profile,
  Body,
  RepositoryBox,
  CodeIcon,
  RepositoryHeader,
  RepositoryName,
  RepositoryBody,
  RepositoryDescription,
  JavaScriptIcon,
  PHPIcon,
  SCSSIcon,
  CSSIcon,
  HTMLIcon,
  TypeScriptIcon,
  DockerIcon,
  RepositoryFooter,
  RepositoryLanguages,
  StarIcon,
  JavaIcon,
  CIcon,
  VueIcon,
  ForkIcon,
  WatchersIcon,
} from '../../styles/user';

function User({ githubProfile, repositories }) {
  return (
    <LayoutUser>
      <Link href="/">
        <BackIcon />
      </Link>

      <Profile>
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
      </Profile>
      <Body>
        {repositories.map((repository) => (
          <RepositoryBox>
            <RepositoryHeader>
              <CodeIcon />
              <Link href={repository.html_url}>
                <RepositoryName>{repository.name}</RepositoryName>
              </Link>
            </RepositoryHeader>
            <RepositoryBody>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
            </RepositoryBody>
            <RepositoryFooter>
              <RepositoryLanguages>
                {repository.language === 'JavaScript' ? <JavaScriptIcon /> : ''}
                {repository.language === 'PHP' ? <PHPIcon /> : ''}
                {repository.language === 'SCSS' ? <SCSSIcon /> : ''}
                {repository.language === 'CSS' ? <CSSIcon /> : ''}
                {repository.language === 'HTML' ? <HTMLIcon /> : ''}
                {repository.language === 'TypeScript' ? <TypeScriptIcon /> : ''}
                {repository.language === 'Dockerfile' ? <DockerIcon /> : ''}
                {repository.language === 'Java' ? <JavaIcon /> : ''}
                {repository.language === 'C' ? <CIcon /> : ''}
                {repository.language === 'Vue' ? <VueIcon /> : ''}
                {repository.language}
              </RepositoryLanguages>
              <RepositoryLanguages>
                <StarIcon />
                {repository.stargazers_count}
              </RepositoryLanguages>
              <RepositoryLanguages>
                <ForkIcon />
                {repository.forks_count}
              </RepositoryLanguages>
              <RepositoryLanguages>
                <WatchersIcon />
                {repository.watchers_count}
              </RepositoryLanguages>
            </RepositoryFooter>
          </RepositoryBox>
        ))}
      </Body>
    </LayoutUser>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { username: 'rhuangabrielsantos' } }],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.username}`);
  const githubProfile = await res.json();

  const repositoriesResponse = await fetch(
    `https://api.github.com/users/${params.username}/repos?sort=updated`
  );
  const repositories = await repositoriesResponse.json();

  return {
    props: {
      githubProfile,
      repositories,
    },
  };
}

export default User;

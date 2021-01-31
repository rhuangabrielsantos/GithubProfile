import styled from 'styled-components';
import Layout from '../components/Layout';

const Text = styled.h1`
  color: black;
`;

function Home() {
  return (
    <Layout>
      <Text>Hello!</Text>
    </Layout>
  );
}

export default Home;

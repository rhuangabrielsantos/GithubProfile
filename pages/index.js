import Footer from '../components/Footer';
import Layout from '../components/Layout';

import {
  Header,
  GitHub,
  Title,
  Form,
  Input,
  Button,
  Search,
} from '../styles/home';

function Home() {
  return (
    <Layout>
      <Header>
        <GitHub />
        <Title>GitHub Profile</Title>
      </Header>
      <Form>
        <Input id="username" />
        <Button onClick={searchProfile}>
          <Search />
        </Button>
      </Form>
      <Footer />
    </Layout>
  );
}

function searchProfile(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;

  window.location.href = `user/${username}`;
}

export default Home;

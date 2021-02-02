import {
  Contacts,
  GitHub,
  Linkedin,
  Twitter,
  Codepen,
  Box,
  Text,
  Hearth,
} from '../styles/footer';

function Footer() {
  return (
    <Contacts>
      <Box>
        <Text>Developed by Rhuan Gabriel </Text>
        <Hearth />
      </Box>

      <Box>
        <a
          href="https://github.com/rhuangabrielsantos"
          title="Github"
          target="_blanked"
        >
          <GitHub />
        </a>

        <a
          href="https://www.linkedin.com/in/rhuangabrielsantos/"
          title="Linkedin"
          target="_blanked"
        >
          <Linkedin />
        </a>

        <a
          href="https://twitter.com/rhuangs_"
          title="Twitter"
          target="_blanked"
        >
          <Twitter />
        </a>

        <a
          href="https://codepen.io/rhuangabrielsantos"
          title="Codepen"
          target="_blanked"
        >
          <Codepen />
        </a>
      </Box>
    </Contacts>
  );
}

export default Footer;

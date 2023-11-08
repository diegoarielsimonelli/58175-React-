import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo-github.png";
export default function Header() {
  return (
    <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='https://api.github.com/users'>
          <img
            alt='github-logo'
            src={logo}
            width='90'
            height='90'
            className='d-inline-block align-top'
          />{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

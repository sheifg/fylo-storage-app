import { Link, Logo, Navbar } from "./myStyledComponents/HeaderStyles";
import { Container } from "./myStyledComponents/Container";
import logo from "../images/logo.svg";

// Normal component, not a styled component
export default function Header() {
  return (
    <Navbar>
      <Container>
        <Logo src={logo} />
        <div>
          <Link href="#">Features</Link>
          <Link href="#">Teams</Link>
          <Link href="#">Sign in</Link>
        </div>
      </Container>
    </Navbar>
  );
}

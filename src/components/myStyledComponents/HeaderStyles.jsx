import styled from "styled-components";

// Header -> Navbar -> Container(display flex) it will be a div, because here it can be used html tags inside of Logo and Link

// Logo itself
export const Logo = styled.img`
  width: 200px;
`;

export const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: #333;
  margin: 0 2rem;
  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
`;

// Main component: the Navbar
// Styling the div inside the nav which is the container
export const Navbar = styled.nav`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
  }
`;

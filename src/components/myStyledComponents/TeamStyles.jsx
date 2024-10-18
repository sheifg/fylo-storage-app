import styled from "styled-components";
import borderimg from "../../images/bg-curve-desktop.svg";

// It will be used for the second section in the main part

// This is an image component taking src as an attribute
//   <img src={featureimg} />

export const TopBorder = styled.img.attrs({
  src: borderimg,
})`
  color:${({ theme }) => theme.colors.teams.bg}
  width:100%;
  margin-top:5rem;`;

export const TeamsContainer = styled.div`
  display: flex;
  margin-top: -1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
  background-color: ${({ theme }) => theme.colors.teams.bg};

  h1 {
    font-size: 42px;
  }
  p {
    font-size: 23px;
  }
  img {
    width: 50%;
    margin-left: 3rem;
  }
`;

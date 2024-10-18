import styled from "styled-components";

export const FeaturesStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  padding: 1rem;

  h1 {
    font-size: 42px;
  }
  p {
    font-size: 23px;
  }
  img {
    width: 50%;
    margin-left: 5rem;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      flex: 1;
    }
  }
`;

// article: it will be for input and button, but it is also possible to use div
// shortcut -> flex grow --> flex: 1

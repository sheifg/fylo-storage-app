import styled from "styled-components";

export const Signup = styled.section`
  background-color: ${({ theme }) => theme.colors.signup.bg};
  width: 100%;
`;
export const SignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;

  h1 {
    font-size: 42px;
  }
  p {
    font-size: 24px;
  }
`;

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Global } from "./components/myStyledComponents/Global";
import Header from "./components/Header";
import Features from "./components/Features";
import { Container } from "./components/myStyledComponents/Container";
import Teams from "./components/Teams";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* If wished to customize the theme, it is needed to use the ThemeProvider component in order to inject a theme into the application  */}
      <ThemeProvider theme={theme}>
        <Global />
        <Header />
        <Container>
          <Features />
        </Container>
        <Teams />
        <SignUp />
      </ThemeProvider>
    </>
  );
}

export default App;

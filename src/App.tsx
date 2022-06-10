import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./Components/Header";
import styled from "@emotion/styled";
import Footer from "./Components/Footer";

export const Main = styled.main`
  height: 65vh;
`;

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Main>
          <Router />
        </Main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./Components/Header";

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

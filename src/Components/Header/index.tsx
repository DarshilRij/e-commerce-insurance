import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Header: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography>YouSet Insurance</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

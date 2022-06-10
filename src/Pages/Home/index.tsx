import { Container } from "@material-ui/core";
import InsuranceListing from "./InsuranceListing";
import { Heading } from "./ContentComponents";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Heading>Select a Tenant Insurance</Heading>
        <InsuranceListing />
      </Container>
    </>
  );
};

export default Home;

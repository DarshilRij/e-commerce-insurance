import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const MainContainer = styled(Container)`
  padding: 2rem 2rem;
`;

export const SpaceWrapper = styled.div`
  padding: 1rem 0rem;
`;

export const ErrorText = styled.p`
  color: #bf1650;

  &:before {
    display: inline;
    content: "⚠ ";
  }
`;

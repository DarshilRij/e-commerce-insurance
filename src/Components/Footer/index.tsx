import { Link } from "@mui/material";
import React from "react";
import { Content, FooterComponent } from "./StyledComponents";

const Footer = () => {
  return (
    <FooterComponent>
      <Content>For More Info</Content>
      <Content>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            window.open("https://www.youset.ca/en/faq");
          }}
        >
          Visit our FAQ
        </Link>
      </Content>
    </FooterComponent>
  );
};

export default Footer;

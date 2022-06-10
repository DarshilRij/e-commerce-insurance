import React from "react";
import InsuranceCard from "../../../Components/Home/InsuranceCard";
import Box from "@mui/material/Box";
import { InsurancePackages } from "../../../Data";

const InsuranceListing: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      {InsurancePackages?.map((InsurancePackage, index) => (
        <InsuranceCard
          name={InsurancePackage.name}
          id={InsurancePackage.id}
          description={InsurancePackage.description}
          price={InsurancePackage.price}
        />
      ))}
    </Box>
  );
};

export default InsuranceListing;

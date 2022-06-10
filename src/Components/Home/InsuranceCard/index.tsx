import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Description, PriceTag } from "./StyledComponent";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type InsuranceCardPropType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const InsuranceCard = ({
  id,
  name,
  description,
  price,
}: InsuranceCardPropType) => {
  return (
    <Card sx={{ maxWidth: 275, margin: "1rem 1rem 0rem 0rem" }}>
      <CardActionArea component={RouterLink} to={`/user/` + id}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Description variant="body2">{description}</Description>
          <PriceTag>$ {price}</PriceTag>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InsuranceCard;

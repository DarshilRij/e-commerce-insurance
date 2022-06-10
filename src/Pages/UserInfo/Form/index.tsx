import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import { useParams } from "react-router-dom";
import { getInsurancePackage } from "../../../Data";
import { ErrorText, MainContainer, SpaceWrapper } from "./StyledComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { ApiPost } from "../../../Helpers/API/ApiData";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  email: String;
  age: String;
  gender: GenderEnum;
}

const UserInfo = () => {
  let params = useParams();
  let selectedInsurancePackage = getInsurancePackage(Number(params.userId));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await ApiPost("/", data);
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SpaceWrapper>
          <Typography variant="overline" display="block" gutterBottom>
            Selected Insured Package
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            {selectedInsurancePackage?.name}
          </Typography>
        </SpaceWrapper>
        <Typography variant="h6" component="h2">
          Just a few questions about you to know better :
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            "& .MuiTextField-root": { width: "25ch" },
          }}
        >
          <SpaceWrapper>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </FormControl>
            {errors.email && (
              <ErrorText>
                This field is Required and be in correct format{" "}
              </ErrorText>
            )}
          </SpaceWrapper>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Age</InputLabel>
              <OutlinedInput
                type="tel"
                id="component-outlined"
                {...register("age", {
                  required: true,
                })}
                label="Age"
              />
            </FormControl>
            {errors.age && (
              <ErrorText>
                This field is Required and be in correct format{" "}
              </ErrorText>
            )}
          <SpaceWrapper>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                {...register("gender", { required: true })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            {errors.gender && <ErrorText>This field is Required </ErrorText>}
          </SpaceWrapper>

          <Button type="submit" variant="contained">
            Buy the Insurance
          </Button>
        </Box>
      </form>
    </MainContainer>
  );
};

export default UserInfo;

import { Container, Typography } from "@mui/material";

// STYLES
const textStyle = {
  backgroundColor: "#CFE8FC",
  margin: 1,
  textAlign: "center",
};

export default function Containers() {
  return (
    <>
      <Container maxWidth="sm">
        <Typography sx={textStyle}>sm</Typography>
      </Container>
      <Container maxWidth="md">
        <Typography sx={textStyle}>md</Typography>
      </Container>
      <Container maxWidth="lg">
        <Typography sx={textStyle}>lg</Typography>
      </Container>
    </>
  );
}


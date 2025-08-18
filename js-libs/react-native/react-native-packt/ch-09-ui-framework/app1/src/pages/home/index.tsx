import { Typography } from "@mui/material";
import Containers from "../../layouts/containers";

type HomePropsType = {
  mainStyle: {
    textAlign: string;
    padding: string;
    
  };
};

export default function Home(props: HomePropsType) {
  const {mainStyle} = props
  
  return (
    <>
      <Typography sx={mainStyle}>Main content</Typography>
      <Containers />
    </>
  );
}


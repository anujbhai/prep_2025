import styled from "@emotion/styled";
import { Drawer, Grid, IconButton, List, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
// import Containers from "../containers";
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import First from "../../pages/first";
import Second from "../../pages/second";
import Third from "../../pages/third";
import Home from "../../pages/home";

const headerFooterStyle = {
  textAlign: "center",
  height: 50,
};

const mainStyle = {
  textAlign: "center",
  padding: "8px 16px",
};

const Item = styled(Paper)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
}));

type TypeLayoutGrids = {
  type?: string;
  key?: string;
};

const links = [
  {
    url: "/", name: "Home"
  },
  {
    url: "/first", name: "First Page"
  },
  {
    url: "/second", name: "Second Page"
  },
  {
    url: "/third", name: "Third Page"
  },
];

export default function LayoutGrids() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = ({type, key}: TypeLayoutGrids) => {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={2} sx={{backgroundColor: "#F3F6F9"}}>
        <Grid size={{xs: 12}}>
          <Item sx={headerFooterStyle}>
            <IconButton
              aria-label="open-drawer-menu"
              onClick={toggleDrawer}
            >
              <MenuOutlined />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer}>
              <div style={{width: 250}}>
                <List component="nav">
                  {links.map((link) => (
                    <NavLink
                      key={link.url}
                      to={link.url}
                      style={{color: "black", textDecoration: "none"}}
                    >
                      {({isActive}) => (
                        <ListItemButton selected={isActive}>
                          <ListItemText primary={link.name} />
                        </ListItemButton>
                      )}
                    </NavLink>
                  ))}
                </List>
              </div>
            </Drawer>

            <Typography sx={mainStyle}>Header</Typography>
          </Item>
        </Grid>
        
        <Grid size={{xs: 2}}>
          <Item>
            <Stack spacing={1}>
              <Typography sx={mainStyle}>Nav item 1</Typography>
              <Typography sx={mainStyle}>Nav item 2</Typography>
              <Typography sx={mainStyle}>Nav item 3</Typography>
              <Typography sx={mainStyle}>Nav item 4</Typography>
            </Stack>
          </Item>
        </Grid>

        <Grid size={{xs: 10}}>
          <Item>
            <section>
              <Routes>
                <Route path="/" element={<Home mainStyle={mainStyle} />} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} />
                <Route path="/third" element={<Third />} />
              </Routes>
            </section>
          </Item>
        </Grid>

        <Grid size={{xs: 12}}>
          <Item sx={headerFooterStyle}>
            <Typography sx={mainStyle}>Footer</Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};


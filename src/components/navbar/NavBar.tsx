import React, { useContext } from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import navbarConfig from "../../config/navbar.config.json";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Divider, Grid, Stack, Switch, Typography } from "@mui/material";
import { GlobalState } from "../../context/UserAccess";
const NavBar = () => {
  const { usertype, CHANGE_USER } = useContext(GlobalState);
  console.log(CHANGE_USER, "CHANGE_USER");
  const changeUserType = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    CHANGE_USER(usertype === "admin" ? "user" : "admin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Typography>{navbarConfig.admin}</Typography>
                  <Switch onChange={changeUserType} />
                  <Typography>{navbarConfig.normaluser}</Typography>
                </Stack>
                <LogoutRoundedIcon />
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

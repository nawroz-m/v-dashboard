import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import TranslateIcon from "@mui/icons-material/Translate";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import WindowIcon from "@mui/icons-material/Window";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <>
      <Paper
        className="container"
        // style={{ border: "1px solid red" }}
        component="form"
        sx={{
          p: "4px 4px",
          display: "flex",
          alignItems: "center",
          mx: 2.5,
          // width: 900,
        }}
        variant="outlined"
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search ..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <TranslateIcon />
        </IconButton>

        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
        <IconButton sx={{ p: "10px" }} aria-label="brightness">
          <SettingsBrightnessIcon />
        </IconButton>
        <IconButton sx={{ p: "10px" }} aria-label="system">
          <WindowIcon />
        </IconButton>
        <IconButton sx={{ p: "10px" }} aria-label="Notifications">
          <NotificationsIcon />
        </IconButton>
        {/* <Avatar alt="User name" src="/logo192.png" /> */}
        <IconButton sx={{ p: "10px" }} aria-label="Avator">
          <PersonIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default Header;

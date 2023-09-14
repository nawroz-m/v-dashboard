import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <>
      <Grid container wrap="nowrap">
        <Grid md={2.3} style={{ border: "1px solid red" }}>
          <Sidebar />
        </Grid>
        <Grid md={9.7} style={{ border: "1px solid blue" }}>
          <Header />
          <Outlet />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;

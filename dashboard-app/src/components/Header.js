import React from "react";
import { useLocation } from "react-router";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PieChartRoundedIcon from "@material-ui/icons/PieChartRounded";
import { makeStyles } from "@material-ui/core/styles";

import HeaderMenu from "./HeaderMenu";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    marginLeft: 10
  }
}));

const Header = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <PieChartRoundedIcon />

        <Typography variant="h6" color="inherit" className={classes.title}>
          Dashboard &mdash; {pathname === "/" ? "Orders" : "Users"}
        </Typography>

        <HeaderBreadcrumbs />
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

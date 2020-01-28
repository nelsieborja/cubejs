import React from "react";
import { Link as RLink } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: 4,
    width: 20,
    height: 20
  },
  link: {
    color: "#fff",
    display: "flex",
    alignItems: "center"
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className={classes.link} component={RLink} to="/">
        <MonetizationOnRoundedIcon className={classes.icon} />
        Orders
      </Link>
      <Link className={classes.link} component={RLink} to="/users">
        <FaceRoundedIcon className={classes.icon} />
        Users
      </Link>
    </Breadcrumbs>
  );
}

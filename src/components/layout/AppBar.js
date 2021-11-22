import * as React from "react";
import { AppBar } from "react-admin";
import { Avatar, Typography } from '@material-ui/core';
import { CustomUserMenu } from "./UserMenu";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flex: 1,
    fontWeight: 500,
    fontSize: "1rem",
    marginLeft: "1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

export const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      color="primary"
      {...props}
      userMenu={<CustomUserMenu />}
    >
      <Avatar src="https://avatars.githubusercontent.com/u/26903069?v=4" />
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <span className={classes.spacer} />
    </AppBar>
  );
};

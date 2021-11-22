import * as React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const ConfigurationMenu = React.forwardRef(({ onClick }, ref) => (
  <>
    <MenuItemLink
      ref={ref}
      size="small"
      to="/configuration"
      primaryText="Config"
      leftIcon={<SettingsIcon />}
      onClick={onClick}
    />
    <MenuItemLink
      ref={ref}
      size="small"
      to="/configuration"
      primaryText="Setting"
      leftIcon={<SettingsIcon />}
      onClick={onClick}
    />
  </>
));

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30,
  },
});

const MyCustomIcon = () => {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.avatar}
      src="https://marmelab.com/images/avatars/adrien.jpg"
    />
  );
};

export const CustomUserMenu = (props) => (
  <UserMenu {...props} icon={<MyCustomIcon />}>
    <ConfigurationMenu />
  </UserMenu>
);

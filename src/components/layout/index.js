import { Layout } from "react-admin";
import { MyAppBar } from "./AppBar";
import { CustomMenu } from "./Menu";
import { MySidebar } from "./SideBar";

const CustomLayout = (props) => (
  <Layout
    {...props}
    appBar={MyAppBar}
    sidebar={MySidebar}
    menu={CustomMenu}
    // notification={MyNotification}
  />
);

export default CustomLayout;



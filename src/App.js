import "./App.css";
import theme from "./config/theme";
import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users";
import CustomLayout from "./components/layout";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostCreate, PostEdit } from "./components/posts";

import { Box } from '@material-ui/core';
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./components/dashboard";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <div>
      <Admin
        theme={theme}
        layout={CustomLayout}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Box height={20} />
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
    </div>
  );
}

export default App;

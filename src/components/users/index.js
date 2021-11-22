import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "../shared/MyUrlField";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

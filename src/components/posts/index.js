import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import {
  Grid,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    fontWeight: 500,
    background: "#EEE",
    padding: "8px 15px 4px",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTable-root RaDatagrid-table-86": {
    boxShadow: "none"
  },
  card: {
    boxShadow: "none"
  }
});

export const PostList = (props) => {
  const classes = useStyles();

  const postFilters = [
    <TextInput
      InputProps={{
        classes,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ marginTop: -6 }} />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
      fullWidth
      variant="standard"
      source="q"
      label=""
      placeholder="Search..."
      alwaysOn
    />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ];

  return (
    <List className={classes} filters={postFilters} {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        {/* <TextField source="id" /> */}
        <TextField source="title" />
        <EditButton />
        <ShowButton />
        {/* <TextField source="body" /> */}
      </Datagrid>
    </List>
  );
};

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <Grid style={{ width: "100%" }} container spacing={4}>
        <Grid item xs={12} md={6}>
          <ReferenceInput variant="standard" source="userId" reference="users">
            <SelectInput variant="standard" optionText="name" />
          </ReferenceInput>
          <br />
          <TextInput variant="standard" outlined source="title" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput variant="standard" multiline source="body" validation />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const PostTitle = ({ record }) => (
  <span>Post: {record ? `${record.title.substring(0, 30)}...` : ""}</span>
);

export const PostEdit = (props) => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <Grid style={{ width: "100%" }} container spacing={4}>
        <Grid item xs={12} md={6}>
          <ReferenceInput variant="standard" source="userId" reference="users">
            <SelectInput variant="standard" optionText="name" />
          </ReferenceInput>
          <br />
          <TextInput variant="standard" outlined source="title" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput variant="standard" multiline source="body" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

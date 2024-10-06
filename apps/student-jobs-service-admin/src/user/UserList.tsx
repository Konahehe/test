import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="education" source="education" />
        <TextField label="Email" source="email" />
        <TextField label="EmployerProfile" source="employerProfile" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="JobSeekerProfile" source="jobSeekerProfile" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="photo" source="photo" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <TextField label="sessionId" source="sessionId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userType" source="userType" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};

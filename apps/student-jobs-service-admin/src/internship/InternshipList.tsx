import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const InternshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Internships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="duration" source="duration" />
        <ReferenceField
          label="employer"
          source="employer.id"
          reference="Employer"
        >
          <TextField source={EMPLOYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="EmployerAssociationForInternship"
          source="employerAssociationForInternship"
        />
        <TextField
          label="EmployerForInternship"
          source="employerForInternship"
        />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="stipend" source="stipend" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

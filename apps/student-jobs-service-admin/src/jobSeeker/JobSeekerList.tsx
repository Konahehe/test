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
import { INTERNSHIP_TITLE_FIELD } from "../internship/InternshipTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobSeekerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"JobSeekers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="education" source="education" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Internship"
          source="internship.id"
          reference="Internship"
        >
          <TextField source={INTERNSHIP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="resume" source="resume" />
        <TextField label="skillSet" source="skillSet" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

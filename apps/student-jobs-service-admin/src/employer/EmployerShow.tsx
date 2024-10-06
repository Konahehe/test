import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYER_TITLE_FIELD } from "./EmployerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmployerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyName" source="companyName" />
        <TextField label="contactEmail" source="contactEmail" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="website" source="website" />
        <ReferenceManyField
          reference="Internship"
          target="employerId"
          label="Internships"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobPosting"
          target="employerId"
          label="JobPostings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="Employer"
              source="employer.id"
              reference="Employer"
            >
              <TextField source={EMPLOYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="job_title" source="jobTitle" />
            <TextField label="requirements" source="requirements" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Job" target="employerId" label="Jobs">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="employer"
              source="employer.id"
              reference="Employer"
            >
              <TextField source={EMPLOYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="EmployerAssociationForJob"
              source="employerAssociationForJob"
            />
            <TextField label="EmployerForJob" source="employerForJob" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="postedDate" source="postedDate" />
            <TextField label="salary" source="salary" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INTERNSHIP_TITLE_FIELD } from "../internship/InternshipTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Application"
          target="userId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Internship"
              source="internship.id"
              reference="Internship"
            >
              <TextField source={INTERNSHIP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="submissionDate" source="submissionDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Employer"
          target="userId"
          label="Employers"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobSeeker"
          target="userId"
          label="JobSeekers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

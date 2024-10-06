import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INTERNSHIP_TITLE_FIELD } from "./InternshipTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const InternshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Application"
          target="internshipId"
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
          reference="JobSeeker"
          target="internshipId"
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

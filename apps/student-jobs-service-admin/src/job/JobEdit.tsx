import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { EmployerTitle } from "../employer/EmployerTitle";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
        <TextInput
          label="EmployerAssociationForJob"
          source="employerAssociationForJob"
        />
        <TextInput label="EmployerForJob" source="employerForJob" />
        <ReferenceArrayInput
          source="jobSeekers"
          reference="JobSeeker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobSeekerTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

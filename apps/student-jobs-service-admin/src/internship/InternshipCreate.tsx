import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { EmployerTitle } from "../employer/EmployerTitle";
import { JobSeekerTitle } from "../jobSeeker/JobSeekerTitle";

export const InternshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <TextInput label="duration" source="duration" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
        <TextInput
          label="EmployerAssociationForInternship"
          source="employerAssociationForInternship"
        />
        <TextInput
          label="EmployerForInternship"
          source="employerForInternship"
        />
        <ReferenceArrayInput
          source="jobSeekers"
          reference="JobSeeker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobSeekerTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <NumberInput label="stipend" source="stipend" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

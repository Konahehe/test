import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InternshipTitle } from "../internship/InternshipTitle";
import { JobPostingTitle } from "../jobPosting/JobPostingTitle";
import { JobTitle } from "../job/JobTitle";
import { UserTitle } from "../user/UserTitle";

export const EmployerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="companyName" source="companyName" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="internships"
          reference="Internship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobPostings"
          reference="JobPosting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobPostingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};

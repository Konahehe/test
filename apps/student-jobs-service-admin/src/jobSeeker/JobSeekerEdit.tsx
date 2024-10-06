import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InternshipTitle } from "../internship/InternshipTitle";
import { JobTitle } from "../job/JobTitle";
import { UserTitle } from "../user/UserTitle";

export const JobSeekerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="education" multiline source="education" />
        <ReferenceInput
          source="internship.id"
          reference="Internship"
          label="Internship"
        >
          <SelectInput optionText={InternshipTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="skillSet" multiline source="skillSet" />
        <TextInput label="skills" multiline source="skills" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

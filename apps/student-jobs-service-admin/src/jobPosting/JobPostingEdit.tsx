import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployerTitle } from "../employer/EmployerTitle";

export const JobPostingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="Employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
        <TextInput label="job_title" source="jobTitle" />
        <TextInput label="requirements" multiline source="requirements" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { InternshipTitle } from "../internship/InternshipTitle";
import { JobTitle } from "../job/JobTitle";
import { UserTitle } from "../user/UserTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="internship.id"
          reference="Internship"
          label="Internship"
        >
          <SelectInput optionText={InternshipTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="submissionDate" source="submissionDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

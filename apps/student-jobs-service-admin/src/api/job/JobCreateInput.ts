import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { JobSeekerCreateNestedManyWithoutJobsInput } from "./JobSeekerCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  employerAssociationForJob?: string | null;
  employerForJob?: string | null;
  jobSeekers?: JobSeekerCreateNestedManyWithoutJobsInput;
  location?: string | null;
  postedDate?: Date | null;
  salary?: number | null;
  title?: string | null;
};

import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { JobSeekerUpdateManyWithoutJobsInput } from "./JobSeekerUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  employerAssociationForJob?: string | null;
  employerForJob?: string | null;
  jobSeekers?: JobSeekerUpdateManyWithoutJobsInput;
  location?: string | null;
  postedDate?: Date | null;
  salary?: number | null;
  title?: string | null;
};

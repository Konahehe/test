import { ApplicationUpdateManyWithoutInternshipsInput } from "./ApplicationUpdateManyWithoutInternshipsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { JobSeekerUpdateManyWithoutInternshipsInput } from "./JobSeekerUpdateManyWithoutInternshipsInput";

export type InternshipUpdateInput = {
  applications?: ApplicationUpdateManyWithoutInternshipsInput;
  description?: string | null;
  duration?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  employerAssociationForInternship?: string | null;
  employerForInternship?: string | null;
  jobSeekers?: JobSeekerUpdateManyWithoutInternshipsInput;
  location?: string | null;
  stipend?: number | null;
  title?: string | null;
};

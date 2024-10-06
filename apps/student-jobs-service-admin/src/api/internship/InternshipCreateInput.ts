import { ApplicationCreateNestedManyWithoutInternshipsInput } from "./ApplicationCreateNestedManyWithoutInternshipsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { JobSeekerCreateNestedManyWithoutInternshipsInput } from "./JobSeekerCreateNestedManyWithoutInternshipsInput";

export type InternshipCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutInternshipsInput;
  description?: string | null;
  duration?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  employerAssociationForInternship?: string | null;
  employerForInternship?: string | null;
  jobSeekers?: JobSeekerCreateNestedManyWithoutInternshipsInput;
  location?: string | null;
  stipend?: number | null;
  title?: string | null;
};

import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobPostingUpdateInput = {
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  jobTitle?: string | null;
  requirements?: string | null;
};

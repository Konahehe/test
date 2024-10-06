import { InternshipCreateNestedManyWithoutEmployersInput } from "./InternshipCreateNestedManyWithoutEmployersInput";
import { JobPostingCreateNestedManyWithoutEmployersInput } from "./JobPostingCreateNestedManyWithoutEmployersInput";
import { JobCreateNestedManyWithoutEmployersInput } from "./JobCreateNestedManyWithoutEmployersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerCreateInput = {
  companyName?: string | null;
  contactEmail?: string | null;
  description?: string | null;
  internships?: InternshipCreateNestedManyWithoutEmployersInput;
  jobPostings?: JobPostingCreateNestedManyWithoutEmployersInput;
  jobs?: JobCreateNestedManyWithoutEmployersInput;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};

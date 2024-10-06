import { InternshipUpdateManyWithoutEmployersInput } from "./InternshipUpdateManyWithoutEmployersInput";
import { JobPostingUpdateManyWithoutEmployersInput } from "./JobPostingUpdateManyWithoutEmployersInput";
import { JobUpdateManyWithoutEmployersInput } from "./JobUpdateManyWithoutEmployersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerUpdateInput = {
  companyName?: string | null;
  contactEmail?: string | null;
  description?: string | null;
  internships?: InternshipUpdateManyWithoutEmployersInput;
  jobPostings?: JobPostingUpdateManyWithoutEmployersInput;
  jobs?: JobUpdateManyWithoutEmployersInput;
  user?: UserWhereUniqueInput | null;
  website?: string | null;
};

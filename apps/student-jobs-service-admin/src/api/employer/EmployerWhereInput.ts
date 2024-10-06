import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InternshipListRelationFilter } from "../internship/InternshipListRelationFilter";
import { JobPostingListRelationFilter } from "../jobPosting/JobPostingListRelationFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployerWhereInput = {
  companyName?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  internships?: InternshipListRelationFilter;
  jobPostings?: JobPostingListRelationFilter;
  jobs?: JobListRelationFilter;
  user?: UserWhereUniqueInput;
  website?: StringNullableFilter;
};

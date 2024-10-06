import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobSeekerListRelationFilter } from "../jobSeeker/JobSeekerListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InternshipWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  duration?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
  employerAssociationForInternship?: StringNullableFilter;
  employerForInternship?: StringNullableFilter;
  id?: StringFilter;
  jobSeekers?: JobSeekerListRelationFilter;
  location?: StringNullableFilter;
  stipend?: FloatNullableFilter;
  title?: StringNullableFilter;
};

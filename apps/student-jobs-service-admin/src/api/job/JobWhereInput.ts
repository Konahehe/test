import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobSeekerListRelationFilter } from "../jobSeeker/JobSeekerListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
  employerAssociationForJob?: StringNullableFilter;
  employerForJob?: StringNullableFilter;
  id?: StringFilter;
  jobSeekers?: JobSeekerListRelationFilter;
  location?: StringNullableFilter;
  postedDate?: DateTimeNullableFilter;
  salary?: FloatNullableFilter;
  title?: StringNullableFilter;
};

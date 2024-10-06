import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerListRelationFilter } from "../employer/EmployerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobSeekerListRelationFilter } from "../jobSeeker/JobSeekerListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  applications?: ApplicationListRelationFilter;
  education?: StringNullableFilter;
  email?: StringNullableFilter;
  employerProfile?: StringNullableFilter;
  employers?: EmployerListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobSeekerProfile?: StringNullableFilter;
  jobSeekers?: JobSeekerListRelationFilter;
  lastName?: StringNullableFilter;
  photo?: JsonFilter;
  role?: "Option1";
  sessionId?: StringNullableFilter;
  userType?: "Option1";
  username?: StringNullableFilter;
};

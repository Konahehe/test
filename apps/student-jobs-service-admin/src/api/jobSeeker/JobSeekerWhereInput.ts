import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InternshipWhereUniqueInput } from "../internship/InternshipWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobSeekerWhereInput = {
  education?: StringNullableFilter;
  id?: StringFilter;
  internship?: InternshipWhereUniqueInput;
  job?: JobWhereUniqueInput;
  resume?: JsonFilter;
  skillSet?: StringNullableFilter;
  skills?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

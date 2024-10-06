import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type JobPostingWhereInput = {
  description?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  requirements?: StringNullableFilter;
};

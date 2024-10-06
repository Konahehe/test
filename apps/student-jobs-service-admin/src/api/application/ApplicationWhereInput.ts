import { StringFilter } from "../../util/StringFilter";
import { InternshipWhereUniqueInput } from "../internship/InternshipWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  internship?: InternshipWhereUniqueInput;
  job?: JobWhereUniqueInput;
  status?: "Option1";
  submissionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};

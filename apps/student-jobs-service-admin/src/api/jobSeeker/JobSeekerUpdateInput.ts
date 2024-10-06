import { InternshipWhereUniqueInput } from "../internship/InternshipWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobSeekerUpdateInput = {
  education?: string | null;
  internship?: InternshipWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
  resume?: InputJsonValue;
  skillSet?: string | null;
  skills?: string | null;
  user?: UserWhereUniqueInput | null;
};

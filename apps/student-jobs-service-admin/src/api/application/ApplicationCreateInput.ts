import { InternshipWhereUniqueInput } from "../internship/InternshipWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationCreateInput = {
  internship?: InternshipWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
  status?: "Option1" | null;
  submissionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};

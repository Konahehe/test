import { JobSeekerWhereInput } from "./JobSeekerWhereInput";
import { JobSeekerOrderByInput } from "./JobSeekerOrderByInput";

export type JobSeekerFindManyArgs = {
  where?: JobSeekerWhereInput;
  orderBy?: Array<JobSeekerOrderByInput>;
  skip?: number;
  take?: number;
};

import { SortOrder } from "../../util/SortOrder";

export type JobSeekerOrderByInput = {
  createdAt?: SortOrder;
  education?: SortOrder;
  id?: SortOrder;
  internshipId?: SortOrder;
  jobId?: SortOrder;
  resume?: SortOrder;
  skillSet?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

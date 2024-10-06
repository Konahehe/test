import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  internshipId?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
  submissionDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

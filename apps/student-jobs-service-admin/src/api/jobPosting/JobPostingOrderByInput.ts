import { SortOrder } from "../../util/SortOrder";

export type JobPostingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  requirements?: SortOrder;
  updatedAt?: SortOrder;
};

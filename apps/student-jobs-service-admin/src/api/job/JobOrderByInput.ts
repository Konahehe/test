import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
  employerAssociationForJob?: SortOrder;
  employerForJob?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  postedDate?: SortOrder;
  salary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

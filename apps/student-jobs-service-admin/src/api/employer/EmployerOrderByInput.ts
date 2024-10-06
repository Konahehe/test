import { SortOrder } from "../../util/SortOrder";

export type EmployerOrderByInput = {
  companyName?: SortOrder;
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  website?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type InternshipOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  employerId?: SortOrder;
  employerAssociationForInternship?: SortOrder;
  employerForInternship?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  stipend?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

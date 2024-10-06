import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  education?: SortOrder;
  email?: SortOrder;
  employerProfile?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  jobSeekerProfile?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  photo?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
  userType?: SortOrder;
  username?: SortOrder;
};

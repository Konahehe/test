import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { EmployerUpdateManyWithoutUsersInput } from "./EmployerUpdateManyWithoutUsersInput";
import { JobSeekerUpdateManyWithoutUsersInput } from "./JobSeekerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUsersInput;
  education?: string | null;
  email?: string | null;
  employerProfile?: string | null;
  employers?: EmployerUpdateManyWithoutUsersInput;
  firstName?: string | null;
  jobSeekerProfile?: string | null;
  jobSeekers?: JobSeekerUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  photo?: InputJsonValue;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  sessionId?: string | null;
  userType?: "Option1" | null;
  username?: string | null;
};

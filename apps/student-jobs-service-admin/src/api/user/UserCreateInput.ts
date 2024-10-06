import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { EmployerCreateNestedManyWithoutUsersInput } from "./EmployerCreateNestedManyWithoutUsersInput";
import { JobSeekerCreateNestedManyWithoutUsersInput } from "./JobSeekerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  education?: string | null;
  email?: string | null;
  employerProfile?: string | null;
  employers?: EmployerCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  jobSeekerProfile?: string | null;
  jobSeekers?: JobSeekerCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  photo?: InputJsonValue;
  role?: "Option1" | null;
  roles: InputJsonValue;
  sessionId?: string | null;
  userType?: "Option1" | null;
  username?: string | null;
};

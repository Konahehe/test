import { Application } from "../application/Application";
import { Employer } from "../employer/Employer";
import { JobSeeker } from "../jobSeeker/JobSeeker";
import { JsonValue } from "type-fest";

export type User = {
  applications?: Array<Application>;
  createdAt: Date;
  education: string | null;
  email: string | null;
  employerProfile: string | null;
  employers?: Array<Employer>;
  firstName: string | null;
  id: string;
  jobSeekerProfile: string | null;
  jobSeekers?: Array<JobSeeker>;
  lastName: string | null;
  photo: JsonValue;
  role?: "Option1" | null;
  roles: JsonValue;
  sessionId: string | null;
  updatedAt: Date;
  userType?: "Option1" | null;
  username: string | null;
};

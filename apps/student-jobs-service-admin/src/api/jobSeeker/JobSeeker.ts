import { Internship } from "../internship/Internship";
import { Job } from "../job/Job";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type JobSeeker = {
  createdAt: Date;
  education: string | null;
  id: string;
  internship?: Internship | null;
  job?: Job | null;
  resume: JsonValue;
  skillSet: string | null;
  skills: string | null;
  updatedAt: Date;
  user?: User | null;
};

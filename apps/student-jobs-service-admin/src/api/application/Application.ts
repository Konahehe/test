import { Internship } from "../internship/Internship";
import { Job } from "../job/Job";
import { User } from "../user/User";

export type Application = {
  createdAt: Date;
  id: string;
  internship?: Internship | null;
  job?: Job | null;
  status?: "Option1" | null;
  submissionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};

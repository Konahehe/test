import { Internship } from "../internship/Internship";
import { JobPosting } from "../jobPosting/JobPosting";
import { Job } from "../job/Job";
import { User } from "../user/User";

export type Employer = {
  companyName: string | null;
  contactEmail: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  internships?: Array<Internship>;
  jobPostings?: Array<JobPosting>;
  jobs?: Array<Job>;
  updatedAt: Date;
  user?: User | null;
  website: string | null;
};

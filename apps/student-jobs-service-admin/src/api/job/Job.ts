import { Application } from "../application/Application";
import { Employer } from "../employer/Employer";
import { JobSeeker } from "../jobSeeker/JobSeeker";

export type Job = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  employer?: Employer | null;
  employerAssociationForJob: string | null;
  employerForJob: string | null;
  id: string;
  jobSeekers?: Array<JobSeeker>;
  location: string | null;
  postedDate: Date | null;
  salary: number | null;
  title: string | null;
  updatedAt: Date;
};

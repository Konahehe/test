import { Application } from "../application/Application";
import { Employer } from "../employer/Employer";
import { JobSeeker } from "../jobSeeker/JobSeeker";

export type Internship = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  duration: string | null;
  employer?: Employer | null;
  employerAssociationForInternship: string | null;
  employerForInternship: string | null;
  id: string;
  jobSeekers?: Array<JobSeeker>;
  location: string | null;
  stipend: number | null;
  title: string | null;
  updatedAt: Date;
};

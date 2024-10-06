import { Employer } from "../employer/Employer";

export type JobPosting = {
  createdAt: Date;
  description: string | null;
  employer?: Employer | null;
  id: string;
  jobTitle: string | null;
  requirements: string | null;
  updatedAt: Date;
};

import { JobPosting as TJobPosting } from "../api/jobPosting/JobPosting";

export const JOBPOSTING_TITLE_FIELD = "jobTitle";

export const JobPostingTitle = (record: TJobPosting): string => {
  return record.jobTitle?.toString() || String(record.id);
};

import { JobSeeker as TJobSeeker } from "../api/jobSeeker/JobSeeker";

export const JOBSEEKER_TITLE_FIELD = "id";

export const JobSeekerTitle = (record: TJobSeeker): string => {
  return record.id?.toString() || String(record.id);
};

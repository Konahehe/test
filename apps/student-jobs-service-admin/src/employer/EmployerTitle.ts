import { Employer as TEmployer } from "../api/employer/Employer";

export const EMPLOYER_TITLE_FIELD = "companyName";

export const EmployerTitle = (record: TEmployer): string => {
  return record.companyName?.toString() || String(record.id);
};

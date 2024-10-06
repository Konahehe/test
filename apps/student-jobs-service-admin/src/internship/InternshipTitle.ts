import { Internship as TInternship } from "../api/internship/Internship";

export const INTERNSHIP_TITLE_FIELD = "title";

export const InternshipTitle = (record: TInternship): string => {
  return record.title?.toString() || String(record.id);
};

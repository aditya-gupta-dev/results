import { t } from "elysia"

export type Subject = {
  subject_code: string;
  maxMarks: number;
  marks: number;
}

export type StudentResult = {
  name: string;
  subjects: Subject[];
}

export const resultsBodyRequest = t.Object({
  regid: t.String(),
  pass: t.String()
})

export type Subject = {
  subject_code: string;
  maxMarks: number;
  marks: number;
}

export type StudentResult = {
  name: string;
  subjects: Subject[];
}
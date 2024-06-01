export interface Skill {
  [key: string]: string[];
}

export type TProject = {
  date: string;
  role: string;
  company: string;
  description: string;
  techstack: string;
  work: string[];
  training?: string;
}
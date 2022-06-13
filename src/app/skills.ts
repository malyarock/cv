export interface Skill {
  id: number;
  name: string;
  progression: number;
}

export const HARD: Skill[] = [
  {id: 1, name: 'ANGULAR', progression: 70},
  {id: 1, name: 'REACT/REACT NATIVE', progression: 37},
  {id: 2, name: 'JAVASCRIPT/TYPESCRIPT', progression: 70},
  {id: 3, name: 'RXJS/REDUX', progression: 45},
  {id: 4, name: 'REACTIVE FORMS', progression: 61},
  {id: 5, name: 'HTML/CSS/SASS/LESS', progression: 74},
];
export const SOFT: Skill[] = [
  {id: 1, name: 'ENGLISH', progression: 49},
  {id: 2, name: 'LEADERSHIP', progression: 51},
  {id: 3, name: 'SELF-SUFFICIENCY', progression: 77},
  {id: 4, name: 'BUSINESS VALUE', progression: 46},
  {id: 5, name: 'PROJECT MANAGER', progression: 35},
];

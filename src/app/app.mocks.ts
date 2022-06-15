import {IEducation, IExperience, ISkill} from "./app.model";

export const HARD: ISkill[] = [
  {id: 1, name: 'ANGULAR', progression: 70},
  {id: 1, name: 'REACT/REACT NATIVE', progression: 37},
  {id: 2, name: 'JAVASCRIPT/TYPESCRIPT', progression: 70},
  {id: 3, name: 'RXJS/REDUX', progression: 45},
  {id: 4, name: 'REACTIVE FORMS', progression: 61},
  {id: 5, name: 'HTML/CSS/SASS/LESS', progression: 74},
];
export const SOFT: ISkill[] = [
  {id: 1, name: 'ENGLISH', progression: 49},
  {id: 2, name: 'LEADERSHIP', progression: 51},
  {id: 3, name: 'SELF-SUFFICIENCY', progression: 77},
  {id: 4, name: 'BUSINESS VALUE', progression: 46},
  {id: 5, name: 'PROJECT MANAGER', progression: 35},
];

export const EDU: IEducation[] = [
  {
    id: 1,
    place: 'Zaporizhzhya national university',
    graduate: 'MASTERʹS DEGREE',
    name: 'SOFTWARE ENGINEERING',
    period: 'SEPTEMBER 2021 - PRESENT',
  },
  {
    id: 2,
    place: 'Zaporizhzhya national technical university',
    graduate: 'MASTERʹS DEGREE',
    name: 'MECHANICAL ENGINEERING',
    period: 'SEPTEMBER 2015 - DECEMBER 2020'
  },
];

export const PROF: IExperience[] = [
  {id: 1, place: 'TBI Bank', name: 'SOFTWARE ENGINEER', period: 'SEPTEMBER 2021 - PRESENT'},
  {id: 2, place: 'Freelance', name: 'SOFTWARE ENGINEER', period: 'JUNE 2021 - AUGUST 2021'},
  {id: 3, place: 'State-owned enterprise', name: 'SOFTWARE ENGINEER', period: 'MARCH 2020 - MAY 2021'},
  {id: 4, place: 'Freelance', name: 'SOFTWARE ENGINEER', period: 'OCTOBER 2015 - MARCH 2020'},
];

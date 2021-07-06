export interface Skill {
    id: number;
    name: string;
    progression: number;
}

export const HARD: Skill[] = [
    { id: 1, name: 'ANGULAR' , progression: 70},
    { id: 1, name: 'REACT/REACT NATIVE' , progression: 50},
    { id: 2, name: 'JAVASCRIPT' , progression: 70},
    { id: 3, name: 'NODE.JS' , progression: 60},
    { id: 4, name: 'LODASH/PRETTIER/TSLINT' , progression: 82},
    { id: 5, name: 'HTML/CSS/SASS/LESS' , progression: 84},
  ];
export const SOFT: Skill[] = [
    { id: 1, name: 'ENGLISH' , progression: 54},
    { id: 2, name: 'LEADERSHIP' , progression: 73},
    { id: 3, name: 'SELF-SUFFICIENCY' , progression: 77},
    { id: 4, name: 'BUSINESS VALUE' , progression: 46},
    { id: 5, name: 'PROJECT MANAGER' , progression: 69},
  ];
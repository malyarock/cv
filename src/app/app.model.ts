export interface ISkill {
  id: number;
  name: string;
  progression: number;
}

export interface IExperience {
  id: number;
  place: string;
  name: string;
  period: string;
}

export interface IEducation extends IExperience {
  graduate: string;
}


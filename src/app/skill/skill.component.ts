import { Component, OnInit, Input } from '@angular/core';
import { HARD, SOFT } from '../skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skillName: any;

  @Input() skillData: any;

  @Input() position: any;

  constructor() { }

  ngOnInit(): void {
  }
}

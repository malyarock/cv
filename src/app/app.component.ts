import {Component} from '@angular/core';

import * as AOS from 'aos';
import {EDU, HARD, PROF, SOFT} from './app.mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ivan-cv';
  hardskills = HARD;
  softskills = SOFT;
  experience = PROF;
  education = EDU;

  calculationDelay(id: any) {

  }

  ngOnInit() {
    AOS.init();
  }
}

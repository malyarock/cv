import { Component} from '@angular/core';

import * as AOS from 'aos';
import { HARD, SOFT } from './skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ivan-cv';
  hardskills = HARD;
  softskills = SOFT;

  ngOnInit() {
    AOS.init();
  }
}

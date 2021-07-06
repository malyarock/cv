import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  @Input() headlineTitle: any;

  @Input() icon: any;

  @Input() pointer: any;

  constructor() {}

  ngOnInit(): void {}
}

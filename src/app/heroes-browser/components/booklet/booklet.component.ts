import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-booklet',
  templateUrl: './booklet.component.html',
  styleUrls: ['./booklet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookletComponent {

  @Input() item: any;
  imageLoaded: boolean = false;

  constructor() { }

}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsComponent{

  @Input() list: any[] = [1];

  constructor() { }

}

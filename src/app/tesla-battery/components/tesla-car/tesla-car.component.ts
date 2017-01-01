import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-car.component.html',
  styleUrls: ['./tesla-car.component.less']
})
export class TeslaCarComponent implements OnInit {
  @Input() wheelsize: number;
  constructor() { }

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { BatteryService } from './tesla-battery.service';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';


@NgModule({
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}

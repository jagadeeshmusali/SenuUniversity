import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./percentage.component.scss'],
  templateUrl: './percentage.component.html',
})
export class PercentageComponent implements OnDestroy {

  studentPercentage = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  classPercentage = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

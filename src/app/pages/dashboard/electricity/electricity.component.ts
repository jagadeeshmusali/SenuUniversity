import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {AngularFireDatabase} from 'angularfire2/database';

import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  data: Array<any>;

  type = 'M1';
  types = ['M1', 'M2', 'M3'];
studentObject = {'Name':'Jagadeesh Musali','Department':'ECE', 'Year': 'Final Year'};
  currentTheme: string;
  themeSubscription: any;
  dbSub: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService, db: AngularFireDatabase) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;

      this.dbSub = db.list('/Professors').valueChanges().subscribe(prof => {
          console.log(prof)
      })
    });
  }


  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.dbSub.unsubscribe();
  }
}

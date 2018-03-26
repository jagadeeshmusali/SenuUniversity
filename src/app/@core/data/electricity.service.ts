import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    
    {
      title: 'M1',
      active: true,
      months: [
        { month: 'Raju', delta: '1.34', down: false, kWatts: '65', cost: '100' },
        { month: 'Senu', delta: '0.95', down: false, kWatts: '32', cost: '50' },
        { month: 'Kiran', delta: '0.25', down: true, kWatts: '54', cost: '100' },
        { month: 'Sam', delta: '1.72', down: false, kWatts: '12', cost: '21' },
      ],
    },
    {
      title: 'M2',
      active: false,
      months: [
        { month: 'shek', delta: '1.34', down: false, kWatts: '65', cost: '100' },
        { month: 'pic', delta: '0.95', down: false, kWatts: '32', cost: '50' },
        { month: 'Ram', delta: '0.25', down: true, kWatts: '54', cost: '100' },
        { month: 'Kam', delta: '1.72', down: false, kWatts: '12', cost: '21' },
        { month: 'Han', delta: '1.34', down: false, kWatts: '65', cost: '100' },
        { month: 'Sha', delta: '0.95', down: false, kWatts: '32', cost: '50' },
        { month: 'Kit', delta: '0.25', down: true, kWatts: '54', cost: '100' },
        { month: 'Sta', delta: '1.72', down: false, kWatts: '12', cost: '21' },
      ],
    },
    {
      title: 'M3',
      active: false,
      months: [
        { month: 'Raju', delta: '1.34', down: false, kWatts: '65', cost: '100' },
        { month: 'Senu', delta: '0.95', down: false, kWatts: '32', cost: '50' },
        { month: 'Kiran', delta: '0.25', down: true, kWatts: '54', cost: '100' },
        { month: 'Sam', delta: '1.72', down: false, kWatts: '12', cost: '21' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}

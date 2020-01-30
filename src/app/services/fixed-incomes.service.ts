import { Injectable } from '@angular/core';
import { FixedIncome } from '../models/fixed-income-model';

@Injectable({
  providedIn: 'root'
})
export class FixedIncomesService {
  private fixedIn: FixedIncome[] = [
    new FixedIncome('Company 1', 1, 5, 700, 30, '1st day of the month', 1, new Date('01-20-2020'), new Date('05-23-2020'), 'Not my BDay'),
    new FixedIncome('Company 2', 3, 7, 300, 25, 'Last day of the month ', 2, new Date('02-09-2020'), new Date('07-30-2021')),
    new FixedIncome('Company 3', 45, 23, 512.2, 25, '25th', 3, new Date('01-10-2019'), new Date('05-24-2019'), 'Sample Date'),
    new FixedIncome('Comapny 4', 52, 14, 1200, 14, '15th', 1, new Date('08-27-2018'), new Date('01-20-2020'))
  ];

  constructor() { }

  getFixedIncomes() {
    return this.fixedIn;
  }

  getFixedIncomesById(id: number): FixedIncome {
    for (const foundFixedIn of this.fixedIn) {
      if (foundFixedIn.id === id) {
        return foundFixedIn;
      }
    }
  }

}
import { Component, OnInit, OnChanges} from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit,OnChanges {
  @Input() company;
  selectedPeriod;
  periodName;

  constructor() { }

  ngOnInit() {
    this.periodName = '7DAYS';
    this.selectedPeriod = this.company[this.periodName]; 
  }

  ngOnChanges() {
    this.periodName = '7DAYS';
    this.selectedPeriod = this.company[this.periodName]; 
  }

  setPeriod(periodName) {
    this.periodName = periodName
    this.selectedPeriod = this.company[this.periodName];
  }
}
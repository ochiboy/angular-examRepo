import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit,OnChanges {
  @Input() company;
  selectedPeriod;

  constructor() { }

  ngOnInit() {
    this.selectedPeriod = this.company['7DAYS']; 
  }

  ngOnChanges() {
    this.selectedPeriod = this.company['7DAYS']; 
  }

  setPeriod(period) {
    this.selectedPeriod = this.company[period];
  }
  

}
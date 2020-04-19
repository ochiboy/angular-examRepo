import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  allData;
  searchText : string;
  companies;
  selectedCompany;
  companyIndex;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
      this.dataService.getJSON().subscribe(data => {
          this.allData = data;
          this.search();
      });
  }

  search() {
    this.companyIndex = null;
    this.selectedCompany = null;
    this.companies = [];
    for (var prop in this.allData) {
      if (!this.searchText || prop.toLowerCase().startsWith(this.searchText.toLowerCase())) {
        this.companies.push(prop);
      }
    }
  }

  select(index) {
    this.companyIndex = index;
    this.selectedCompany = this.allData[this.companies[this.companyIndex]];
  }

}
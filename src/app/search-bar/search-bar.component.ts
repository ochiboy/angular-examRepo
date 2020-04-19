import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  allData;
  allCompanies;
  searchInput;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
      this.dataService.getJSON().subscribe(data => {
          this.allData = data;
      });
  }

}

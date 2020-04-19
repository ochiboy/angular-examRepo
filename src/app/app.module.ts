import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
    ])
  ],
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    SearchBarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
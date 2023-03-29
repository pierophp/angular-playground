import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxHierarchicalGridModule } from 'igniteui-angular';
import { GridComponent } from './grid/grid.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    MatSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    IgxGridModule,
    IgxHierarchicalGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

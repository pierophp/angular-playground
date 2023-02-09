import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxHierarchicalGridModule } from 'igniteui-angular';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [AppComponent, GridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxHierarchicalGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

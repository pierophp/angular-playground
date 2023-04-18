import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressTestComponent } from './progress-test/progress-test.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { IgxGridModule, IgxHierarchicalGridModule } from 'igniteui-angular';
import { GridComponent } from './grid/grid.component';
import { TypesafetyComponent } from './typesafety/typesafety.component';
import { NgAsModule } from 'ng-as';

@NgModule({
  declarations: [
    AppComponent,
    ProgressTestComponent,
    SubmenuComponent,
    GridComponent,
    TypesafetyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    IgxGridModule,
    IgxHierarchicalGridModule,
    NgAsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

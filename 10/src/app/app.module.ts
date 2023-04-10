import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';
import { MenuDinosComponent } from './menu-dinos/menu-dinos.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import {
  IgxGridModule,
  IgxTreeGridModule,
  IgxHierarchicalGridModule,
} from 'igniteui-angular';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { TypesafetyComponent } from './typesafety/typesafety.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmenuComponent,
    HomeComponent,
    MenuDinosComponent,
    FormsComponent,
    GridComponent,
    MatSelectComponent,
    TypesafetyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatMenuModule,
    MatProgressBarModule,
    IgxGridModule,
    IgxHierarchicalGridModule,
    IgxTreeGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

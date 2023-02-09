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
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';
import { MenuDinosComponent } from './menu-dinos/menu-dinos.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { IgxGridModule, IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    SubmenuComponent,
    HomeComponent,
    MenuDinosComponent,
    FormsComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatMenuModule,
    MatProgressBarModule,
    IgxGridModule,
    IgxTreeGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

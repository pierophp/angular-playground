import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import { MatSelectComponent } from './mat-select/mat-select.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'submenu', component: SubmenuComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'select', component: MatSelectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

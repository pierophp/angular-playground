import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { MatSelectComponent } from './mat-select/mat-select.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  {
    path: 'select', component: MatSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressTestComponent } from './progress-test/progress-test.component';
import { SubmenuComponent } from './submenu/submenu.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  { path: 'progress', component: ProgressTestComponent },
  { path: 'submenu', component: SubmenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

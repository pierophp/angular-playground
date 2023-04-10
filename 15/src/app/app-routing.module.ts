import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ProgressTestComponent } from './progress-test/progress-test.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { TypesafetyComponent } from './typesafety/typesafety.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  { path: 'progress', component: ProgressTestComponent },
  { path: 'submenu', component: SubmenuComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: 'grid', component: GridComponent },
  { path: 'typesafety', component: TypesafetyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

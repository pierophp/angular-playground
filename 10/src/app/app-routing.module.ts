import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'submenu', component: SubmenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

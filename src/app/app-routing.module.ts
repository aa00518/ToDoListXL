import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { RedditsComponent } from './components/reddits/reddits.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { RedditsDetailComponent } from './components/reddits-detail/reddits-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent },
  { path: 'reddits', component: RedditsComponent },
  { path: 'reddits-detail', component: RedditsDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

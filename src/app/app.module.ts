import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './firebaseConfig';

import { TodolistComponent } from './components/todolist/todolist.component';
import { RedditsComponent } from './components/reddits/reddits.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';

import { TodolistService } from './services/todolist.service';
import { RedditsService } from './services/reddits.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    RedditsComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'todolistxl'),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [TodolistService, RedditsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

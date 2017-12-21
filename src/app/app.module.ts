import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TodolistService } from './services/todolist.service';

import { firebaseConfig } from './firebaseConfig';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'todolistxl'),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

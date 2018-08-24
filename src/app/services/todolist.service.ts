import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToDoListItem, ToDoListItemID } from './../models/todolistitem.model';

@Injectable()
export class TodolistService {
  private todoListCollection: AngularFirestoreCollection<ToDoListItem>;
  
  constructor(public db: AngularFirestore) { }

  getToDoListItemsSnapshot(): Observable<ToDoListItemID[]> {
    this.todoListCollection = this.db.collection<ToDoListItem>('todolist', ref => ref.orderBy('addedDT', 'desc'));
    return this.todoListCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ToDoListItem;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  insertToDoListItem(todoItem: string) {
    this.todoListCollection.add({ todoitem: todoItem, addedDT: new Date() });
  }

  deleteToDoListItem(id: string) {
    this.todoListCollection.doc(id).delete();
  }

  updateToDoListItem(id: string, value: string) {
    this.todoListCollection.doc(id).update({ todoitem: value });
  }
}

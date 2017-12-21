import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TodolistService {
  constructor(public db: AngularFirestore) {
  }

  getToDoListItemsSnapshot() {
    return this.db.collection('todolist').snapshotChanges();
  }

  insertToDoListItem(todoItem: string) {
    this.db.collection("todolist").add({ todoitem: todoItem });
  }

  deleteToDoListItem(id: string) {
    this.db.collection("todolist").doc(id).delete();
  }
}

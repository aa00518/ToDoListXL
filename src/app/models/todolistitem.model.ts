export interface ToDoListItem {
    todoitem: string;
    addedDT: Date;
}

export interface ToDoListItemID extends ToDoListItem {
    id: string;
}

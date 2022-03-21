import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TASK } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  private showEditTask: boolean = false;
  private subjectEdit = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    const showAddTask = !this.showAddTask;
    const showEditTask = false;
    this.subject.next({showAddTask, showEditTask});
  }

  //subscribe into this 
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  toogleEditTask(task: TASK){
    const editToggle = !this.showEditTask;
    const showAddTask = false;
    this.subjectEdit.next({task, editToggle, showAddTask});
  }

  onToggleEdit(): Observable<any> {
    return this.subjectEdit.asObservable();
  }
}
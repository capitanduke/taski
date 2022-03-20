import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASK } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  faTimes = faTimes;
  @Input() task!: TASK;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(task: TASK){
    this.deleteTask.emit(task);
  }

  onToggle(task: TASK){
    this.toggleReminder.emit(task);
  }

}

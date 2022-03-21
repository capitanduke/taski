import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASK } from '../../Task';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  faTimes = faTimes;
  faEdit = faEdit;
  @Input() task!: TASK;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();

  constructor(private uiService : UiService) { }

  ngOnInit(): void {
    
  }

  onDelete(task: TASK){
    this.deleteTask.emit(task);
  }

  onEdit(task: TASK){
    this.uiService.toogleEditTask(task)
  }

  onToggle(task: TASK){
    this.toggleReminder.emit(task);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { TASK } from '../../Task';
import { ServiceService } from '../../components/service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TASK[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    
    this.service.getData().subscribe(resp => this.tasks = resp);

  }

  onDeleteTask(task: TASK){
    console.log(task)
    this.service.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  editReminder(task: TASK){
    task.reminder = !task.reminder;
    this.service.editReminder(task).subscribe();
  }

  addTask(task: any) {
    this.service.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  

}

import { Component, OnInit, Output, EventEmitter} from '@angular/core'; 
import { TASK } from '../../Task';
import { ServiceService } from '../../components/service.service';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '350px',
        position: 'relative',
        left: '0', 
      })),
      state('closed', style({
        height: '0px',
        position: 'relative',
        left: '-600px', 
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseEdit', [
      // ...
      state('open', style({
        height: '350px',
        position: 'relative',
        right: '0', 
      })),
      state('closed', style({
        height: '0px',
        position: 'relative',
        right: '-600px', 
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})

export class AddTaskComponent implements OnInit {
  id!: number;
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  subscription!: Subscription;
  subscriptionEdit!: Subscription;
  task!: TASK;
  boolEdit: boolean = false;
  testTemp: string = 'test';

  constructor(private service: ServiceService, private uiService: UiService) { }

  ngOnInit(): void {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(({showAddTask, showEditAdd}) => {
        this.showAddTask = showAddTask,
        this.boolEdit = showEditAdd
      });

    this.subscriptionEdit = this.uiService
      .onToggleEdit()
      .subscribe(({task, editToggle, showAddTask}) => {
        this.task = task,
        this.id = task.id,
        this.text = task.text,
        this.day = task.day
        this.boolEdit = editToggle
        this.showAddTask = showAddTask;
      })
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit(){
    if(this.text.length || this.day.length){
      const newTask: any = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
  
      this.onAddTask.emit(newTask);
  
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }

  onSubmitEdit(){
    if(this.text.length || this.day.length){
      const taskUpdated: any = {
        id: this.id,
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      
      this.onEditTask.emit(taskUpdated);

      this.text = '';
      this.day = '';
      this.reminder = false;
      this.boolEdit = false;
  
    }
  }



}

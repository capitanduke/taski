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
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})

export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = true;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  subscription!: Subscription;

  constructor(private service: ServiceService, private uiService: UiService) { }

  ngOnInit(): void {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
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



}

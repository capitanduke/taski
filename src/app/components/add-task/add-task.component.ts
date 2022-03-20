import { Component, OnInit, Output, EventEmitter} from '@angular/core'; 
import { TASK } from '../../Task';
import { ServiceService } from '../../components/service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = true;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
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

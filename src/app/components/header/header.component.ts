import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private uiService: UiService) { }

  ngOnInit(): void {
  }

  toggleAdd(){
    this.uiService.toggleAddTask();
  }

}

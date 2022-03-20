import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() openAdd = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.openAdd.emit();
  }



}

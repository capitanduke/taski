import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() openAdd = new EventEmitter;
  text: string = '';
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.text = this.isOpen ? "CLOSE" : "ADD"; 
  }

  onClick(){
    this.openAdd.emit();
    this.isOpen = !this.isOpen;
    this.text = this.isOpen ? "CLOSE" : "ADD" 
  }



}

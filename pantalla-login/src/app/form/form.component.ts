import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hide = true;
  persona = new persona("","")

  submitted = false;

  onLogin(){
    this.submitted = true;
    console.log(this.persona);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

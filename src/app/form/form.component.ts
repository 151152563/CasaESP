import { Message } from './message.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public message = new Message()

  
  public formulario: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'message': new FormControl(null),
  })






  constructor() { }

  ngOnInit(): void {
    this.message.id = 123
    console.log(this.message);
    
  }
  

  catchData() : Message{
    let messageFromForm = new Message()
    messageFromForm.title = this.formulario.value.title
    messageFromForm.message = this.formulario.value.message
    return messageFromForm
  }

  update(){
    console.log(this.message);
    console.log(this.catchData());
  }

  sendToFront(){
    
  }

}

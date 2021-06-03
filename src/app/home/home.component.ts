import { Message } from '../form/message.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public messages: Message[] | undefined
  // public message = new Message()
  
  constructor() { }


  ngOnInit(): void {
    // this.message.title = "OI"
    // this.message.message = "Fora bolsonaro"
    // this.messages?.push(this.message)
    // console.log(this.messages);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  
  nick = '';
  message = '';
  messages: string[] = [];

  ngOnInit()
  {
    this.nick = window.prompt('Your name:', 'Bailey');

    let connection = new HubConnectionBuilder()
      .withUrl("/chat")
      .build();
    

    connection.on("sendToAll", (msg: any) =>
    {
      console.log(msg);
      this.messages.push(msg.content);
    });

    connection.start().then(() =>
    {
      connection.invoke("sendToAll", "Hi");
    }).catch((err) =>
    { 
      console.log(err);
    });

  }

}

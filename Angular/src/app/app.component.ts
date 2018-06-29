import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  connection: HubConnection;
  nick = '';
  message = '';
  messages = [];

  ngOnInit()
  {
    this.nick = "Bailey"//window.prompt('Your name:', 'Bailey');

    this.connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/chat")
      .build();
    

    this.connection.on("sendToAll", (msg: any) =>
    {
      console.log(msg);
      this.messages.push(msg);
    });

    this.connection.start().then(() =>
    {
      this.SendMessage(`User ${this.nick} connected.`);
    }).catch((err) =>
    { 
      console.log(err);
    });
  }

  SendMessage(msg: any): void
  {
    this.connection.invoke("sendToAll", msg);
  }

}

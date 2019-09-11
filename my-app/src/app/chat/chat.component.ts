import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageContent: string;
  messageLog: string[] = [];
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initToConnection();
  }

  private initToConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: string) => {
        this.messageLog.push(message);
      });
  }

  private sendMessage() {
    console.log("Clicked!");
    if (this.messageContent) {
      console.log("Added message");
      console.log(this.messageLog);
      this.socketService.send(this.messageContent);
      this.messageContent = null;
    } else {
      console.log("Failure");
    }
  }

}

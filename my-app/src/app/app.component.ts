import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
  // Listen to an event from the socket io server
  this.webSocketService.listen('test event').subscribe((data) => {
    console.log(data);
  });
  }

}

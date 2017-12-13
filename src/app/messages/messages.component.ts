import { Component, OnInit } from '@angular/core';
import { MessageService } from "../service/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { ChataiService } from '../chatai.service';
import { Message } from '../message';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  public messages: Message[] = [];
  constructor(private chatai:ChataiService) {
    this.chatai.obs.subscribe((messages) => {
      this.messages = messages;
    });
   }

   public allMessages(): Message[] {
    return this.messages.filter((message) => message.role != 'system');
   }

}

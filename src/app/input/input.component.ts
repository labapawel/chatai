import { Component } from '@angular/core';
import { ChataiService } from '../chatai.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public message: string = '';
  constructor(private chatai: ChataiService) {
    
  }

  sendMessage() {
    this.chatai.quest(this.message);
    this.message = "";
  }


}

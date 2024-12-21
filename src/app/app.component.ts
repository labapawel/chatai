import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MessageComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sem3chat';
}

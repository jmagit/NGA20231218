import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from '@my/core';
import { HeaderComponent } from './main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(log: LoggerService) {

  }
}

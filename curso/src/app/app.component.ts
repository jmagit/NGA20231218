import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { LoggerService } from '@my/core';
import { HeaderComponent, NotificationComponent, NotificationModalComponent } from './main';
import { DemosComponent } from './ejemplos/demos/demos.component';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DemosComponent, NotificationComponent, NotificationModalComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'curso';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // constructor(log: LoggerService) {
  //   log.error('Es un error')
  //   log.info('Hola mundo')
  // }
  constructor(private notify: NotificationService) {}

  ngOnInit(): void {
    this.notify.add('Aplicación arrancada', NotificationType.info)
  }


}

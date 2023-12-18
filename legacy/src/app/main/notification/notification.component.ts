import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common-app';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class NotificationComponent implements OnInit {

  constructor(private vm: NotificationService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

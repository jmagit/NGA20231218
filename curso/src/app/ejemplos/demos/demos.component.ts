import { Component } from '@angular/core';
import { NotificationService } from '../../common-services';
import { NotificationComponent } from "../../main";

@Component({
    selector: 'app-demos',
    standalone: true,
    templateUrl: './demos.component.html',
    styleUrl: './demos.component.css',
    imports: [NotificationComponent],
    // providers: [ NotificationService ],
})
export class DemosComponent {
  constructor(public vm: NotificationService) {}
}

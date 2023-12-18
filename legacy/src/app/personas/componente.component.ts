import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';
import { MinValidator, MaxValidator } from '../../mp-core/directives/validadores.directive';
import { FormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-personas',
    templateUrl: './tmpl-anfitrion.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, forwardRef(() => PersonasAddComponent), forwardRef(() => PersonasEditComponent), forwardRef(() => PersonasViewComponent), NgSwitchDefault, forwardRef(() => PersonasListComponent)]
})
export class PersonasComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }
}
@Component({
    selector: 'app-personas-list',
    templateUrl: './tmpl-list.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class PersonasListComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
}
@Component({
    selector: 'app-personas-add',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf, MinValidator, MaxValidator]
})
export class PersonasAddComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
}
@Component({
    selector: 'app-personas-edit',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf, MinValidator, MaxValidator]
})
export class PersonasEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
  ngOnDestroy() { }
}
@Component({
    selector: 'app-personas-view',
    templateUrl: './tmpl-view.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true
})
export class PersonasViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
  ngOnDestroy() { }
}
export const PERSONAS_COMPONENTES = [
  PersonasComponent, PersonasListComponent, PersonasAddComponent, PersonasEditComponent,
  PersonasViewComponent,
];

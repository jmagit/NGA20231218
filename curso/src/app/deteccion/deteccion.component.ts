import { ChangeDetectionStrategy, Component, Injector, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-deteccion',
  standalone: true,
  imports: [],
  templateUrl: './deteccion.component.html',
  styleUrl: './deteccion.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DeteccionComponent {
  private injector = inject(Injector)

  cont2 = signal(0)
  otro = signal("Cadena")
  doble = computed(() => this.cont2() * 2)
  cont = 0

  constructor() {
    effect(() => {
      //this.cont = 1
      console.log(`Doble ${this.doble()}`)
    })
  }
  inc() {
    this.cont++
    this.cont2.update(old => old + 1)
  }
  dec() {

    effect(() => {
      // this.cont = 1
      console.log(`Doble ${this.doble()}`)
    }, {injector: this.injector})
  }
}

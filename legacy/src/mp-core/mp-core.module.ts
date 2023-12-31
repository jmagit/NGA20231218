import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/validadores.directive';



@NgModule({
    exports: [
        PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES,
    ],
    imports: [
        CommonModule,
        PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES
    ]
})
export class MpCoreModule { }

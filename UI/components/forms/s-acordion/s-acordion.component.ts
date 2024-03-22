import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SCheckboxComponent } from '../s-checkbox/s-checkbox.component';

@Component({
  standalone: true,
  selector: 'app-s-acordion',
  templateUrl: './s-acordion.component.html',
  styleUrls: ['./s-acordion.component.scss'],
  imports: [AccordionModule, CommonModule, FormsModule, SCheckboxComponent],
  encapsulation: ViewEncapsulation.None,
})
export class SAcordionComponent {
  @Input() categorias: {
    nombre: string;
    permisos: { label: string; value: boolean }[];
  }[] = [];

  constructor() {
    this.categorias = [];
  }
}

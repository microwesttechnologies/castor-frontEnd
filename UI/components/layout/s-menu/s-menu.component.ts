import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-s-menu',
  templateUrl: './s-menu.component.html',
  imports: [MenubarModule, CommonModule],
  styleUrls: ['./s-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SMenuComponent implements OnInit {
  @Output() eventActionSidebar = new EventEmitter<boolean>();
  @Input() items: MenuItem[] | undefined;
  @Input() sidebarVisible!: boolean;
  @Input() image: string;
  @Input() placeholder: string;
  @Input() greeting: string = 'Hola';
  @Input() name: string = 'Darwin Diaz';
  @Input() role: string = 'Hola';

  constructor() {
    this.placeholder = '';
    this.image = '../../../assets/icon/icon-short.svg';
    this.items = [
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Reserva Actual',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Historial de reservas',
            icon: 'pi pi-fw pi-trash',
          },
        ],
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Perfil usuario',
            icon: 'pi pi-fw pi-align-left',
          },
        ],
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }

  ngOnInit() {}
}

import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-s-button',
  templateUrl: './s-button.component.html',
  styleUrls: ['./s-button.component.scss'],
  imports: [ButtonModule],
  encapsulation: ViewEncapsulation.None
})
export class SButtonComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() styleClass: string;
  @Input() disabled!: boolean;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.label = '';
    this.icon = '';
    this.styleClass = '';
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}

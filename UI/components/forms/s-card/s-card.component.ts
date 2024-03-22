import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-s-card',
  templateUrl: './s-card.component.html',
  styleUrls: ['./s-card.component.scss'],
  imports: [CardModule, ButtonModule],
  encapsulation: ViewEncapsulation.None,
})
export class SCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() route: string = 'Hola';
  @Output() sendPageEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  sendPage() {
    console.log(this.route);
    this.sendPageEvent.emit(this.route);
    this.router.navigate([this.route]);
  }
}

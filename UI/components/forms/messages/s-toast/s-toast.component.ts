import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  standalone: true,
  selector: 'app-s-toast',
  templateUrl: './s-toast.component.html',
  styleUrls: ['./s-toast.component.scss'],
  imports: [ToastModule],
})
export class SToastComponent {
  /**
   *
   */
  constructor() {}
}

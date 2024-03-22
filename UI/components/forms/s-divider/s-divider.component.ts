import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
@Component({
  standalone: true,
  selector: 'app-s-divider',
  templateUrl: './s-divider.component.html',
  styleUrls: ['./s-divider.component.scss'],
  imports: [DividerModule],
})
export class SDividerComponent {}

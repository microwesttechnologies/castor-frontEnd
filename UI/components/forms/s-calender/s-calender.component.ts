import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  standalone: true,
  selector: 'app-s-calender',
  templateUrl: './s-calender.component.html',
  styleUrls: ['./s-calender.component.scss'],
  imports: [CalendarModule, CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class SCalenderComponent {
  @Input() date: Date[] | undefined;
  @Input() label!: string;
  @Input() placeholder!: string;
}

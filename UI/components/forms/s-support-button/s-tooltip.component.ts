import { Component, ViewEncapsulation } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  selector: 'app-s-suport',
  templateUrl: './s-suport.component.html',
  styleUrls: ['./s-suport.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [TooltipModule]
})
export class SSuportComponent {

}

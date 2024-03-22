import { Component, ElementRef, Input } from '@angular/core';
import { BlockableUI } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-s-blockable-div',
  templateUrl: './s-blockable-div.component.html',
  styleUrls: ['./s-blockable-div.component.scss'],
})
export class SBlockableDivComponent implements BlockableUI {
  @Input() style: any;
  @Input() class: any;
  /**
   *
   */
  constructor(private el: ElementRef) {}
  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }
}

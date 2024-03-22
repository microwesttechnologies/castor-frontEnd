import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-s-banner',
  templateUrl: './s-banner.component.html',
  styleUrls: ['./s-banner.component.scss'],
})
export class SBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}

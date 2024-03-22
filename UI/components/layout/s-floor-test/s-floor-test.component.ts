import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export class ConfigImage {
  height?: string;
  width?: string;
  src?: string;
}

export class ImageMapCoordinate {
  background?: string;
  selected?: boolean;
  height!: string;
  radius?: string;
  width!: string;
  index?: number;
  params?: any;
  x!: string;
  y!: string;
}

@Component({
  standalone: true,
  selector: 'app-s-floor-test',
  templateUrl: './s-floor-test.component.html',
  styleUrls: ['./s-floor-test.component.scss'],
  imports: [CommonModule],
})
export class SFloorTestComponent {
  @Input() configImage!: ConfigImage;
  @Input() coordinates!: ImageMapCoordinate[];
  @Output() eventClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();

  constructor() {}

  getCoordinateStyle = (coordinate: ImageMapCoordinate): Object => {
    return {
      top: `${coordinate.y}`,
      left: `${coordinate.x}`,
      height: `${coordinate.height}`,
      width: `${coordinate.width}`,
      background:
        coordinate.background || coordinate.selected ? 'green' : '#ff0000',
      'border-radius': coordinate.radius || '100%',
    };
  };

  selectedCoordinate = (coordinate: ImageMapCoordinate, index: number) =>
    this.eventClick.emit({ ...coordinate, index });
}

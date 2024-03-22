import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { SFloorTestComponent } from '../s-floor-test/s-floor-test.component';

interface City {
  name: string;
  code: string;
}

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
  selector: 'app-s-floor',
  templateUrl: './s-floor.component.html',
  styleUrls: ['./s-floor.component.scss'],
  imports: [
    DialogModule,
    ButtonModule,
    ImageModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    SFloorTestComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SFloorComponent {
  visible: boolean = false;
  showImage: boolean = false;
  cities: City[] | undefined;
  floor: City | undefined;
  imageFloor: string = '';
  floor12: string = '../../../assets/img/floor-12.png';
  floor13: string = '../../../assets/img/floor-13.png';
  configImage = {
    src: 'assets/img/floor-12.png',
    height: '400px',
  };

  seat_number!: number;

  @Input() coordinates: ImageMapCoordinate[] = [];

  eventClick = (itemSelected?: any) => {
    this.coordinates.forEach((item) => {
      item.selected = false;
    });
    itemSelected.selected = true;
    itemSelected.selected = itemSelected.selected ? true : false;
    this.coordinates[itemSelected?.index] = itemSelected;
    this.seat_number = itemSelected.seat_number;
    console.log(itemSelected.selected);
  };

  constructor() {
    this.cities = [
      { name: 'Piso 12', code: '12' },
      { name: 'Piso 13', code: '13' },
    ];
  }

  showDialog() {
    this.visible = true;
  }

  changeFloor(value: any) {
    const floorSelected = value.code;

    if (floorSelected == 12) {
      this.imageFloor = this.floor12;
    } else {
      this.imageFloor = this.floor13;
    }
  }

  getCoordinateStyle = (coordinate: ImageMapCoordinate): Object => {
    return {
      top: `${coordinate.y}`,
      left: `${coordinate.x}`,
      height: `${coordinate.height}`,
      width: `${coordinate.width}`,
      background:
        coordinate.background || coordinate.selected ? 'red' : 'green',
      'border-radius': coordinate.radius || '100%',
    };
  };

  selectedCoordinate = (coordinate: ImageMapCoordinate, index: number) =>
    this.eventClick({ ...coordinate, index });
}

import { CommonModule, KeyValue } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FILTERKEYS } from 'UI/shared/FilterKeys.enum';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  standalone: true,
  selector: 'app-s-radio-button',
  templateUrl: './s-radio-button.component.html',
  styleUrls: ['./s-radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule, RadioButtonModule],
})
export class SRadioButtonComponent implements OnInit {
  @Input() id: string = '';
  @Input() labelText: string = '';
  @Input() value: string | any = '';
  @Input() selectedAnswer: any = null;
  @Input() errorMessage: string = '';
  @Input() keyfilterType: FILTERKEYS = FILTERKEYS.none;
  @Input() answers: any[] = [
    { name: 'Sí', key: 'A' },
    { name: 'No', key: 'M' },
  ];
  @Output() valueChange: EventEmitter<KeyValue<string, string | number>> =
    new EventEmitter<KeyValue<string, string | number>>();

  onValueChange(_newValue: string | number) {
    const key = this.id;
    const value = _newValue;
    const keyValue: KeyValue<string, string | number> = { key, value };
    this.valueChange.emit(keyValue);
  }

  ngOnInit() {}
}

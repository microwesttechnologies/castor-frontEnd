import { CommonModule, KeyValue } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
@Component({
  standalone: true,
  selector: 'app-s-textarea',
  templateUrl: './s-textarea.component.html',
  styleUrls: ['./s-textarea.component.scss'],
  imports: [InputTextareaModule, CommonModule, FormsModule, KeyFilterModule],
})
export class STextareaComponent {
  @Input() id: string = '';
  @Input() labelText: string = '';
  @Input() value: string | any = '';
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
  @Input() enabled: boolean = true;
  @Output() valueChange: EventEmitter<KeyValue<string, string | number>> =
    new EventEmitter<KeyValue<string, string | number>>();

  selectedValue: any;

  ngOnInit(): void {
    this.selectedValue = { key: this.value };
  }

  onValueChange(_newValue: string | number) {
    const key = this.id;
    const value = _newValue;
    const keyValue: KeyValue<string, string | number> = { key, value };
    this.valueChange.emit(keyValue);
  }
}

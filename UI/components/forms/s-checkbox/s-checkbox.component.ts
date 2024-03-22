import { CommonModule, KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  standalone: true,
  selector: 'app-s-checkbox',
  templateUrl: './s-checkbox.component.html',
  styleUrls: ['./s-checkbox.component.scss'],
  imports: [CheckboxModule, CommonModule, FormsModule],
})
export class SCheckboxComponent implements OnInit {
  @Input() id: string = '';
  @Input() labelText: string = '';
  @Input() value: boolean = false;
  @Input() groupName: string = '';
  @Output() valueChange: EventEmitter<KeyValue<string, boolean>> =
    new EventEmitter<KeyValue<string, boolean>>();
  selectedValue: boolean = false;

  ngOnInit(): void {
    this.selectedValue = this.value;
  }
  onValueChange(_newValue: boolean) {
    const key = this.id;
    const _value: boolean = _newValue;
    const keyValue: KeyValue<string, boolean> = { key: key, value: _value };
    this.valueChange.emit(keyValue);
  }
}

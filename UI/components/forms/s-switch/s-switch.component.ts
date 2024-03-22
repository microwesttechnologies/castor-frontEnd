import { CommonModule, KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  standalone: true,
  selector: 'app-s-switch',
  templateUrl: './s-switch.component.html',
  styleUrls: ['./s-switch.component.scss'],
  imports: [InputSwitchModule, CommonModule, FormsModule],
})
export class SSwitchComponent implements OnInit {
  @Input() id: string = '';
  @Input() value: boolean = false;
  @Input() disabled: boolean = false;
  selectedValue: boolean = false;
  @Output() valueChange: EventEmitter<KeyValue<string, boolean>> =
    new EventEmitter<KeyValue<string, boolean>>();
  isCompleted: boolean = false;

  ngOnInit(): void {
    this.selectedValue = this.value;
  }
  onValueChange(selectedKeyValue: boolean) {
    this.selectedValue = selectedKeyValue;
    let realKeyValue: KeyValue<string, boolean> = {
      key: this.id,
      value: selectedKeyValue,
    };
    this.valueChange.emit(realKeyValue);
  }
}

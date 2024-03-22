import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, KeyValue } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
  standalone: true,
  selector: 'app-s-textbox',
  templateUrl: './s-textbox.component.html',
  styleUrls: ['./s-textbox.component.scss'],
  imports: [InputTextModule, CommonModule, FormsModule, KeyFilterModule],
})
export class STextboxComponent implements OnInit {
  @Input() id: string = '';
  @Input() labelText: string = '';
  @Input() value: string | any = '';
  @Input() placeholder: string = '';

  @Input() errorMessage: string = '';
  @Input() enabled: boolean = true;
  @Input() maxlength: number = -1;
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

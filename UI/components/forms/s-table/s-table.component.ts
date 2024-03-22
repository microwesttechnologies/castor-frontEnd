import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SButtonComponent } from '../s-button/s-button.component';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SSwitchComponent } from '../s-switch/s-switch.component';
import { FormsModule } from '@angular/forms';
import { SDynamicContentComponentComponent } from '../../utils/s-dynamic-content-component/s-dynamic-content-component.component';

interface TableColumn {
  field: string;
  name: string;
  type: string;
  isSortable?: boolean;
  isBoolean?: boolean;
  renderHtml?: string;
}

@Component({
  standalone: true,
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss'],
  imports: [
    TableModule,
    CommonModule,
    SButtonComponent,
    InputTextModule,
    ButtonModule,
    SSwitchComponent,
    FormsModule,
    SDynamicContentComponentComponent,
  ],
})
export class STableComponent<T> implements OnInit {
  @Input() data!: T[];
  @Input() rowsPerPage: number = 10;
  @Input() columns: TableColumn[] = [];
  @Input() currentPageReportTemplate: string = '';
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];
  @Input() showEditColumn: boolean = false;
  @Input() showDeleteColumn: boolean = false;
  @Input() showInactiveColumn: boolean = false;
  @Input() deleteButtonLabel: string = 'Eliminar';
  @Input() editButtonLabel: string = 'Editar';
  @Input() showClearFilterButton: boolean = false;
  @Output() onEditClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleteClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() editEmployeeData: EventEmitter<any> = new EventEmitter<any>();
  icon = 'pi pi-user-edit';
  visible!: boolean;

  sortField: string | undefined = '';
  sortOrder: number | undefined = 0;
  globalFilterFields: string[] = [];
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    this.globalFilterFields = this.columns.map(
      (item: TableColumn) => item.field
    );
  }

  onEditButtonClick(id: string) {
    this.editEmployeeData.emit(id);
  }
  

  onDeleteButtonClick(id: string) {
    this.onDeleteClick.emit(id);
  }

  onSort(event: SortEvent) {
    this.sortField = event.field;
    this.sortOrder = event.order;
    this.sortData();
  }

  private sortData() {
    if (this.sortField !== undefined && this.sortOrder !== undefined) {
      const dataCopy = [...this.data];
      this.data = dataCopy.sort((a, b) => {
        const value1 = a[this.sortField as keyof T];
        const value2 = b[this.sortField as keyof T];
        if (
          value1 === undefined ||
          value1 === null ||
          value2 === undefined ||
          value2 === null
        ) {
          return 0;
        }
        return (
          (value1 > value2 ? 1 : value1 < value2 ? -1 : 0) * this.sortOrder!
        );
      });
    }
  }

  clear(table: Table) {
    table.clear();
  }

  filterGlobal(table: Table, event: Event, param: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    table.filterGlobal(filterValue, param);
  }

  getHtmlContent(data: any, col: TableColumn): string {
    if (col.type === 'html') {
      const element = this.renderer.createElement('div');
      if (col.renderHtml) {
        this.renderer.setProperty(element, 'innerHTML', col.renderHtml);
      }
      return element;
    }
    return data[col.field];
  }
}

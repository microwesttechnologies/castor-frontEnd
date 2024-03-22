import { Component, ViewEncapsulation } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  standalone: true,
  selector: 'app-s-confirm',
  templateUrl: './s-confirm.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [ConfirmDialogModule, ToastModule],
  styleUrls: ['./s-confirm.component.scss'],
})
export class SConfirmComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
    });
  }
}

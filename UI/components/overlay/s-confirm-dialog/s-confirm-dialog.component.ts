import { Component } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  standalone: true,
  selector: 'app-s-confirm-dialog',
  templateUrl: './s-confirm-dialog.component.html',
  styleUrls: ['./s-confirm-dialog.component.scss'],
  imports: [ConfirmDialogModule],
})
export class SConfirmDialogComponent {}

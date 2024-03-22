import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { GlobalState } from 'UI/app/store/global.state';
import { CommonModule } from '@angular/common';
import { removeUser } from 'UI/app/store/global.actions';
import { MsalService } from '@azure/msal-angular';
import { SSelectComponent } from '../../forms/s-select/s-select.component';

@Component({
  standalone: true,
  selector: 'app-s-sidebar',
  templateUrl: './s-sidebar.component.html',
  styleUrls: ['./s-sidebar.component.scss'],
  imports: [
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    CommonModule,
    SSelectComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SSidebarComponent implements OnInit {
  @Output() eventActionSidebar = new EventEmitter<boolean>();
  @Input() sidebarVisible: boolean = false;
  @Input() items: MenuItem[] | undefined;
  @Input() greeting: string = 'Hola';
  user$ = this.globalStore.select((state) => state.globalState.user);

  constructor(
    private authService: MsalService,
    private globalStore: Store<{ globalState: GlobalState }>
  ) {
    this.items = [];
  }

  ngOnInit() {}

  sidebarClose = () => {
    this.sidebarVisible = false;
    this.eventActionSidebar.emit(false);
  };

  logout() {
    localStorage.removeItem('globalState');
    this.globalStore.dispatch(removeUser());
    this.authService.logoutRedirect();
  }
}

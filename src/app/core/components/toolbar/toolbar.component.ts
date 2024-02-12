import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  constructor(private sidenav: SidenavService) { }

  async toggleSidenav() {
    await this.sidenav.toggle();
  }

  sidenavDisabled() {
    return this.sidenav.disabled;
  }
}

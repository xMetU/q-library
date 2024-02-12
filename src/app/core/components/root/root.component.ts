import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { SidenavService } from '../../services/sidenav.service';
import { ContentComponent } from '../content/content.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CategoryListComponent } from '~/category/components/category-list/category-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CategoryListComponent,
    ContentComponent,
    MatSidenavModule,
    ToolbarComponent,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
})
export class RootComponent implements AfterViewInit {
  title = 'q-library';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}

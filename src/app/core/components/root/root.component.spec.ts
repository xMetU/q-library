import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';

import { RootComponent } from './root.component';
import { SidenavService } from '../../services/sidenav.service';

const MOCK_SIDENAV_SERVICE = {
  setSidenav: jest.fn(),
};

describe('RootComponent', () => {
  let fixture: ComponentFixture<RootComponent>;
  let component: RootComponent;
  let sidenavService: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        NgxsModule.forRoot([]),
        RootComponent,
      ],
      providers: [{ provide: SidenavService, useValue: MOCK_SIDENAV_SERVICE }],
    }).compileComponents();

    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the sidenav', () => {
    component.ngAfterViewInit();
    expect(sidenavService.setSidenav).toHaveBeenCalledWith(component.sidenav);
  });
});

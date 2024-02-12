import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';

import { RootComponent } from './root.component';
import { SidenavService } from '../../services/sidenav.service';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;
  let sidenavService: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RootComponent,
        NgxsModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    sidenavService = fixture.debugElement.injector.get(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the sidenav', () => {
    component.ngAfterViewInit();
    expect(sidenavService['sidenav']).toBe(component.sidenav);
  });
});

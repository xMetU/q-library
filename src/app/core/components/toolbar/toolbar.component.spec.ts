import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { SidenavService } from '../../services/sidenav.service';

const MOCK_SIDENAV_SERVICE = {
  disabled: false,
  toggle: jest.fn(),
};

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  let sidenavService: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [{ provide: SidenavService, useValue: MOCK_SIDENAV_SERVICE }],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the sidenav when the button is clicked', () => {
    fixture.debugElement.nativeElement.querySelector('button').click();
    expect(sidenavService.toggle).toHaveBeenCalled();
  });

  it('respond to changes in sidenav state', () => {
    sidenavService.disabled = true;
    expect(component.sidenavDisabled()).toBe(true);
    sidenavService.disabled = false;
    expect(component.sidenavDisabled()).toBe(false);
  });
});

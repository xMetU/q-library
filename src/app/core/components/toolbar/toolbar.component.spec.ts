import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';

import { ToolbarComponent } from './toolbar.component';
import { SidenavService } from '../../services/sidenav.service';

jest.mock('@angular/material/sidenav');
const MockedSidenav = (MatSidenav as unknown) as jest.Mock<MatSidenav>;

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  let sidenavService: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    sidenavService = fixture.debugElement.injector.get(SidenavService);
    sidenavService.setSidenav(new MockedSidenav());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the sidenav when the button is clicked', async () => {
    const toggleSpy = jest.spyOn(sidenavService, 'toggle');
    fixture.debugElement.nativeElement.querySelector('button').click();
    fixture.whenStable().then(() => expect(toggleSpy).toHaveBeenCalled());
  });

  it('respond to changes in sidenav state', async () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    sidenavService.disable();
    fixture.whenStable().then(() => expect(button.disabled).toBe(true));
    sidenavService.enable();
    fixture.whenStable().then(() => expect(button.disabled).toBe(false));
  });
});

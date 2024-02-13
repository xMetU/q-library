import { TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavService } from './sidenav.service';

const MOCK_SIDENAV = {
  open: jest.fn(),
  close: jest.fn(),
  toggle: jest.fn(),
};

describe('SidenavService', () => {
  let service: SidenavService;
  let sidenav: MatSidenav;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [{ provide: MatSidenav, useValue: MOCK_SIDENAV }],
    });

    service = TestBed.inject(SidenavService);
    sidenav = TestBed.inject(MatSidenav);
    service.setSidenav(sidenav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store a reference to a sidenav', () => {
    expect(service['sidenav']).toBe(sidenav);
  });

  it.each(['open', 'close', 'toggle'])('should %s the sidenav', (fnKey: string) => {
    (service[fnKey as keyof SidenavService] as () => void)();
    expect(sidenav[fnKey as keyof MatSidenav]).toHaveBeenCalled();
  });

  it('can be enabled and disabled', () => {
    service.disable();
    expect(service.disabled).toBe(true);
    service.enable();
    expect(service.disabled).toBe(false);
  });

  it.each(['open', 'close', 'toggle'])('should not %s the sidenav when disabled', (fnKey: string) => {
    service.disable();
    (service[fnKey as keyof SidenavService] as () => void)();
    expect(sidenav[fnKey as keyof MatSidenav]).not.toHaveBeenCalled();
  });
});

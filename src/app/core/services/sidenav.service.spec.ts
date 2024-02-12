import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavService } from './sidenav.service';

describe('SidenavService', () => {
  let service: SidenavService;
  let fixture: ComponentFixture<MatSidenav>;
  let sidenav: MatSidenav;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
    });

    service = TestBed.inject(SidenavService);
    fixture = TestBed.createComponent(MatSidenav);
    sidenav = fixture.componentInstance;
    service.setSidenav(sidenav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store a reference to a sidenav', () => {
    expect(service['sidenav']).toBe(sidenav);
  });

  it('should open the sidenav', () => {
    const openSpy = jest.spyOn(sidenav, 'open');
    service.open();
    expect(openSpy).toHaveBeenCalled();
  });

  it('should close the sidenav', () => {
    const closeSpy = jest.spyOn(sidenav, 'close');
    service.close();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should toggle the sidenav', () => {
    const toggleSpy = jest.spyOn(sidenav, 'toggle');
    service.toggle();
    expect(toggleSpy).toHaveBeenCalled();
  });

  it('can be enabled and disabled', () => {
    service.disable();
    expect(service.disabled).toBe(true);
    service.enable();
    expect(service.disabled).toBe(false);
  });

  it('should not interact with the sidenav when disabled', () => {
    service.disable();
    const methods = [() => service.open(), () => service.close(), () => service.toggle()];
    const spies = [jest.spyOn(sidenav, 'open'), jest.spyOn(sidenav, 'close'), jest.spyOn(sidenav, 'toggle')];
    methods.forEach((m) => m());
    spies.forEach((s) => expect(s).not.toHaveBeenCalled());
  });
});

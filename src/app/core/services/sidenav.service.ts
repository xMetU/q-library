import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;
  disabled: boolean = false;

  constructor() { }

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  enable() {
    this.disabled = false;
  }

  disable() {
    this.disabled = true;
  }

  open() {
    if (this.disabled) return;
    return this.sidenav.open();
  }

  close() {
    if (this.disabled) return;
    return this.sidenav.close();
  }

  toggle() {
    if (this.disabled) return;
    return this.sidenav.toggle();
  }
}

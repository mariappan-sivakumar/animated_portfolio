import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  mobileOpen = signal(false);

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}

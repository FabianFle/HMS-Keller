import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuBtn = document.querySelector('.menuBtnMobile');
    const mobileMenuDiv = this.mobileMenu.nativeElement;

    if (this.isMenuOpen) {
      menuBtn?.classList.add('open');
      mobileMenuDiv.classList.add('open'); // Fügen Sie die .open Klasse zum Menü hinzu
      mobileMenuDiv.classList.remove('d-none');
    } else {
      menuBtn?.classList.remove('open');
      mobileMenuDiv.classList.remove('open'); // Entfernen Sie die .open Klasse vom Menü
      mobileMenuDiv.classList.add('d-none');
    }
  }

  closeMenu() {
    const menuBtn = document.querySelector('.menuBtnMobile');
    const mobileMenuDiv = this.mobileMenu.nativeElement;

    menuBtn?.classList.remove('open');
    mobileMenuDiv.classList.remove('open'); // Entfernen Sie die .open Klasse vom Menü
    this.isMenuOpen = false;
    mobileMenuDiv.classList.add('d-none');
  }
}

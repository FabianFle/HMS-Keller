import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.mobileMenu.nativeElement.classList.remove('d-none');
    } else {
      this.mobileMenu.nativeElement.classList.add('d-none');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.mobileMenu.nativeElement.classList.add('d-none');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent {
  Werke: string[] = Array.from({ length: 40 }, (_, i) => (i + 1).toString());
  Machienen: string[] = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  
  showImage = false;
  selectedImage: string | undefined;

  openImage(image: string) {
    this.selectedImage = image;
    this.showImage = true;
  }

  closeImage() {
    this.showImage = false;
    this.selectedImage = undefined;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-starfield',
  imports: [],
  template: `<div #starfield class="starfield-container animate-star-field"></div>`,
})
export class Starfield implements AfterViewInit {
  @ViewChild('starfield') starfieldRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const container = this.starfieldRef.nativeElement;
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top  = Math.random() * 200 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.opacity = String(Math.random() * 0.5 + 0.1);
      const size = Math.random() * 2 + 1;
      star.style.width  = size + 'px';
      star.style.height = size + 'px';
      if (Math.random() > 0.7) {
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`;
      }
      container.appendChild(star);
    }
  }
}

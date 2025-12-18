import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  @ViewChild('animation1', { static: false }) animation1!: ElementRef;
  @ViewChild('animation2', { static: false }) animation2!: ElementRef;
  @ViewChild('animation3', { static: false }) animation3!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const lottie = await import('lottie-web');
      
      if (this.animation1) {
        lottie.default.loadAnimation({
          container: this.animation1.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/animations/about-animation1.json'
        });
      }

      if (this.animation2) {
        lottie.default.loadAnimation({
          container: this.animation2.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/animations/about-animation2.json'
        });
      }

      if (this.animation3) {
        lottie.default.loadAnimation({
          container: this.animation3.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/animations/about-animation3.json'
        });
      }
    }
  }
}

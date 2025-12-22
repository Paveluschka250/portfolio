import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  @ViewChild('animationContainer', { static: false }) animationContainer!: ElementRef;

  skills = [
    { name: 'Angular', icon: 'assets/icons/angular.png' },
    { name: 'TypeScript', icon: 'assets/icons/ts.png' },
    { name: 'JavaScript', icon: 'assets/icons/js.png' },
    { name: 'HTML', icon: 'assets/icons/html.png' },
    { name: 'CSS', icon: 'assets/icons/css.png' },
    { name: 'Git', icon: 'assets/icons/git.png' },
    { name: 'Firebase', icon: 'assets/icons/firebase.png' },
    { name: 'REST API', icon: 'assets/icons/rest-api.png' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.animationContainer) {
      const lottie = await import('lottie-web');
      lottie.default.loadAnimation({
        container: this.animationContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/skill-animation.json'
      });
    }
  }

  getRandomPosition(index: number): { x: number; y: number } {
    // Zufällige aber passende Positionen, damit sich Icons nicht überdecken
    const positions = [
      { x: 10, y: 15 },
      { x: 25, y: 25 },
      { x: 45, y: 20 },
      { x: 65, y: 30 },
      { x: 80, y: 15 },
      { x: 15, y: 50 },
      { x: 40, y: 60 },
      { x: 70, y: 55 }
    ];
    return positions[index % positions.length];
  }
}

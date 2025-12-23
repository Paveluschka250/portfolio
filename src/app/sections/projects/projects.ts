import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {
  @ViewChild('animationContainer', { static: false }) animationContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.animationContainer) {
      const lottie = await import('lottie-web');
      lottie.default.loadAnimation({
        container: this.animationContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/projects-animation.json'
      });
    }
  }
  projects = [
    {
      name: 'El Pollo Loco',
      description: '2D Jump and Run Spiel',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/projects/el-pollo-loco.png',
      liveLink: '#', // Hier deinen Link eintragen
      detailLink: '/projects/el-pollo-loco'
    },
    {
      name: 'Join',
      description: 'Projektmanagement Tool',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/projects/join.png',
      liveLink: '#', // Hier deinen Link eintragen
      detailLink: '/projects/join'
    },
    {
      name: 'Pokedex',
      description: 'Pokémon Enzyklopädie mit API',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'assets/images/projects/pokedex.png',
      liveLink: '#', // Hier deinen Link eintragen
      detailLink: '/projects/pokedex'
    },
    {
      name: 'My Notes',
      description: 'Notizen App',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/projects/my-notes.png',
      liveLink: '#', // Hier deinen Link eintragen
      detailLink: '/projects/my-notes'
    },
    {
      name: 'Ring of Fire',
      description: 'Trinkspiel App',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      image: 'assets/images/projects/ring-of-fire.png',
      liveLink: '#', // Hier deinen Link eintragen
      detailLink: '/projects/ring-of-fire'
    }
  ];
}

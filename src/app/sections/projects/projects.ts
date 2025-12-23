import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project';
import { Project } from '../../services/project';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {
  @ViewChild('animationContainer', { static: false }) animationContainer!: ElementRef;
  projects: Project[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private projectService: ProjectService
  ) {
    this.projects = this.projectService.getFeaturedProjects(5);
  }

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
}

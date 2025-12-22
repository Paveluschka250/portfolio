import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Footer } from './components/footer/footer';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Skills, Projects, About, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Alle Sections beobachten (außer Hero, die ist sofort sichtbar)
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      section.classList.add('scroll-animate');
      observer.observe(section);
    });
  }
}

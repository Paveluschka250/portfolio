import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ChangeDetectorRef, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  @Input() showNavigation: boolean = true;
  isMenuOpen = false;
  scrollProgress = 0;
  private scrollListener?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.updateScrollProgress();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.updateScrollProgress(); // Initial calculation
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private updateScrollProgress() {
    if (isPlatformBrowser(this.platformId)) {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      this.scrollProgress = Math.min(100, Math.max(0, progress));
      this.cdr.detectChanges(); // Change Detection anstoßen
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu(); // Menü schließen nach Klick
    }
  }
}

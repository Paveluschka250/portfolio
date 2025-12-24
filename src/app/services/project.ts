import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  detailLink: string;
  status?: 'fertig' | 'in-bearbeitung';
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Project[] {
    return [
      // Neueste Projekte (Angular)
      {
        name: 'Ring of Fire',
        description: 'Trinkspiel App mit Firebase',
        technologies: ['Angular', 'TypeScript', 'Firebase'],
        image: 'assets/images/projects/ring-of-fire.png',
        liveLink: 'https://paul-gross-dev.com/projects/ring_of_fire/',
        detailLink: '/projects/ring_of_fire',
        status: 'in-bearbeitung'
      },
      {
        name: 'DaNotes',
        description: 'Notizen App mit Angular',
        technologies: ['Angular', 'TypeScript', 'SCSS'],
        image: 'assets/images/projects/danotes.png',
        liveLink: 'https://paul-gross-dev.com/projects/danotes/',
        detailLink: '/projects/danotes',
        status: 'in-bearbeitung'
      },
      {
        name: 'Meine Todo App',
        description: 'Todo-Management App',
        technologies: ['Angular', 'TypeScript', 'SCSS'],
        image: 'assets/images/projects/meine-todo-app.png',
        liveLink: 'https://paul-gross-dev.com/projects/meine_todo_app/',
        detailLink: '/projects/meine_todo_app',
        status: 'in-bearbeitung'
      },
      // JavaScript Projekte
      {
        name: 'Apex Spin',
        description: 'Interaktives Spiel',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/apex-spin.png',
        liveLink: 'https://paul-gross-dev.com/projects/apex_spin/',
        detailLink: '/projects/apex_spin',
        status: 'in-bearbeitung'
      },
      {
        name: 'Join',
        description: 'Projektmanagement Tool (Gruppenarbeit)',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        image: 'assets/images/projects/join.png',
        liveLink: 'https://paul-gross-dev.com/projects/join/',
        detailLink: '/projects/join',
        status: 'fertig'
      },
      {
        name: 'El Pollo Loco',
        description: '2D Jump and Run Spiel',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/el-pollo-loco.png',
        liveLink: 'https://paul-gross-dev.com/projects/el_pollo_loco/',
        detailLink: '/projects/el_pollo_loco',
        status: 'fertig'
      },
      {
        name: 'Tic Tac Toe',
        description: 'Klassisches Strategiespiel',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/tic-tac-toe.png',
        liveLink: 'https://paul-gross-dev.com/projects/tic_tac_toe/',
        detailLink: '/projects/tic_tac_toe',
        status: 'fertig'
      },
      {
        name: 'Pokedex',
        description: 'Pokémon Enzyklopädie mit API',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'assets/images/projects/pokedex.png',
        liveLink: 'https://paul-gross-dev.com/projects/pokedex/',
        detailLink: '/projects/pokedex',
        status: 'fertig'
      },
      {
        name: 'Quiz App',
        description: 'Interaktive Quiz-Anwendung',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/quizapp.png',
        liveLink: 'https://paul-gross-dev.com/projects/quizapp/',
        detailLink: '/projects/quizapp',
        status: 'in-bearbeitung'
      },
      {
        name: 'Bestellapp',
        description: 'Online-Bestellsystem',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/bestellapp.png',
        liveLink: 'https://paul-gross-dev.com/projects/bestellapp/',
        detailLink: '/projects/bestellapp',
        status: 'fertig'
      },
      {
        name: 'My Gamestore',
        description: 'Online-Spiele-Shop',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/my-gamestore.png',
        liveLink: 'https://paul-gross-dev.com/projects/my_gamestore/',
        detailLink: '/projects/my_gamestore',
        status: 'fertig'
      },
      {
        name: 'My Notes',
        description: 'Notizen App',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/my-notes-mockup.png',
        liveLink: 'https://paul-gross-dev.com/projects/my_notes/',
        detailLink: '/projects/my_notes',
        status: 'fertig'
      },
      {
        name: 'Fotogram',
        description: 'Foto-Galerie App',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/images/projects/fotogram.png',
        liveLink: 'https://paul-gross-dev.com/projects/fotogram/',
        detailLink: '/projects/fotogram',
        status: 'fertig'
      },
      {
        name: 'Kochwelt',
        description: 'Rezept-Website (Gruppenarbeit)',
        technologies: ['HTML', 'CSS'],
        image: 'assets/images/projects/kochwelt.png',
        liveLink: 'https://paul-gross-dev.com/projects/kochwelt/',
        detailLink: '/projects/kochwelt',
        status: 'fertig'
      },
      {
        name: 'Rock Mountain',
        description: 'Landing Page',
        technologies: ['HTML', 'CSS'],
        image: 'assets/images/projects/rock-mountain.png',
        liveLink: 'https://paul-gross-dev.com/projects/rock_mountain/',
        detailLink: '/projects/rock_mountain',
        status: 'fertig'
      },
      {
        name: 'Sakura Ramen',
        description: 'Restaurant-Website',
        technologies: ['HTML', 'CSS'],
        image: 'assets/images/projects/sakura-ramen.png',
        liveLink: 'https://paul-gross-dev.com/projects/sakura_ramen/',
        detailLink: '/projects/sakura_ramen',
        status: 'fertig'
      }
    ];
  }

  getFeaturedProjects(count: number = 5): Project[] {
    return this.getProjects().slice(0, count);
  }
}

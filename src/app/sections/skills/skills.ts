import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
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
}

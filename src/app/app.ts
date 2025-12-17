import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

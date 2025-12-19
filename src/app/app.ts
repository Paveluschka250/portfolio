import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Skills, Projects, About, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

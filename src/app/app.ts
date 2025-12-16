import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

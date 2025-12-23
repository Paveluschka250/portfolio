import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-all-projects',
  imports: [RouterLink, Header, Footer],
  templateUrl: './all-projects.html',
  styleUrl: './all-projects.scss',
})
export class AllProjects {
}


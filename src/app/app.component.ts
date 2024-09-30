import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent],
  template: `
    <nav><a routerLink="/">Home</a><a routerLink="page-1">Page 1</a></nav>
    <app-nav name="asdf"></app-nav>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {}

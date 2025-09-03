import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public menuList: Menu[] = [
    {name: 'Music', route: '/author', isCurrent: false},
  ]

  constructor() {

  }
}

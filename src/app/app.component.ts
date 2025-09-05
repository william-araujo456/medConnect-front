import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {NgClass} from '@angular/common';

interface Menu {
  title: string;
  route: string;
  isCurrent?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public menuList: Menu[] = [
    {title: 'Autor', route: '/author', isCurrent: false},
    {title: 'Musica', route: '/music', isCurrent: false},
    {title: 'Album', route: '/album', isCurrent: false},
  ]
  public router: Router = new Router();
  constructor() {
    this.changeMenu(this.menuList[0]);
  }

  public changeMenu(item: Menu): void {
    const menu = this.menuList.forEach(
      (menu) => menu.isCurrent = menu.route === item.route
    );
    this.goToPage(item.route)
  }

  public goToPage(route: string): void {
    this.router.navigate([route]).then();
  }
}

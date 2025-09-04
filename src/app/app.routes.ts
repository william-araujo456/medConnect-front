import {Routes} from '@angular/router';
import {AuthorComponent} from '../components/author/author.component';
import {MusicComponent} from '../components/music/music.component';
import {AlbumComponent} from '../components/album/album.component';

export const routes: Routes = [
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddSongComponent } from './add-song/add-song.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'library', component: LibraryComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'addsong', component: AddSongComponent  }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
}

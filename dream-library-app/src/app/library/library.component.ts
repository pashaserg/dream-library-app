import { Component, OnInit } from '@angular/core';

import { Howl } from 'howler';

import { PlayerService } from '../services/player.service';

import { SongModel } from '../shared/song.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public library: SongModel[];

  sound: Howl;

  constructor (private playerService: PlayerService) {
  }

  ngOnInit() {
    this.library = this.playerService.getLibrary();
  }

  public onPlay() {
  }

  // public onPause() {
  //   this.playerService.pause();
  // }

  // public onStop() {

  // }

  // public onNext() {

  // }

  // public onPrevious() {

  // }
}

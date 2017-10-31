import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Howl } from 'howler';

import { SongModel } from '../shared/song.model';



@Injectable()
export class PlayerService {

  private isPlaying = false;

  public lib: any = [
    {id: 0, artist: 'Chris Isaak', name: 'Wicked Game', cover: 'http://127.0.0.1:8887/isaak.jpg', src: 'http://127.0.0.1:8887/song1.mp3'},
    {id: 1, artist: 'Adrian Lux',  name: 'Teenage Crime', cover: 'http://127.0.0.1:8887/lux.jpg', src: 'http://127.0.0.1:8887/song.mp3'},
    {id: 2, artist: 'Bob Marley', name: 'Jammin', cover: 'http://127.0.0.1:8887/marley.png',  src: 'http://127.0.0.1:8887/song2.mp3'}
  ];

  sound = new Howl({
    src: ['']
  });

  getLibrary() {
    return this.lib;
  }

}

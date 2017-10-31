import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

import { PlayerService } from '../services/player.service';
import { SongModel } from '../shared/song.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 list: SongModel[];
 sound = new Howl({
  src: ['']
});
 isPlaying = false;
 currentSongIndex: number;

 constructor (private playerService: PlayerService) {
}

  ngOnInit() {
    this.list = this.playerService.getLibrary();
    this.currentSongIndex = 0;
    this.songInit(this.list[this.currentSongIndex].src);
  }

  onPlay() {
    if (this.isPlaying) {
      return;
    } else {
     console.log('play');
     this.sound.play();
     this.isPlaying = true;
    }
  }

  onPause() {
    if (!this.isPlaying) {
      return;
    } else {
      console.log('pause');
    this.sound.pause();
    this.isPlaying = false;
    }
  }

  onStop() {
    if (this.isPlaying === false) {
      return;
    } else {
      console.log('stop');
    this.sound.stop();
    this.isPlaying = false;
    }
  }

  onBackward() {
    this.onStop();
    if (this.currentSongIndex !== 0) {
      this.currentSongIndex--;
    }
    this.songInit(this.list[this.currentSongIndex].src);
    this.onPlay();
  }

  onForward() {
      this.onStop();
      if (this.currentSongIndex === this.list.length - 1) {
        this.currentSongIndex = 0;
      } else {
        this.currentSongIndex++;
      }
      this.songInit(this.list[this.currentSongIndex].src);
      this.onPlay();
  }

  songInit(src: string) {
    this.sound = new Howl({
      src: [src]
    });
  }

}

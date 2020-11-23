import { Component, OnInit } from '@angular/core';
import {Music} from "../shared/interfaces/music";
import {MusicService} from "../shared/services/music.service";

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  private _musics: Music[];

  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this._musicService.getAll()
      .subscribe((musics:Music[]) => this._musics = musics);
    console.log(this._musics);
  }

  get musics(): Music[] {
    return this._musics;
  }

}

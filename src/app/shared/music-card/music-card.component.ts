import {Component, Input, OnInit} from '@angular/core';
import {Music} from "../interfaces/music";

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {

  private _music: Music;

  constructor() { }

  ngOnInit(): void {
  }

  get music(): Music {
    return this._music;
  }

  @Input()
  set music(music: Music) {
    this._music = music;
  }

}

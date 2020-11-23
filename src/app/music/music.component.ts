import { Component, OnInit } from '@angular/core';
import {Music} from "../shared/interfaces/music";
import {MusicService} from "../shared/services/music.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  private _music: Music;

  constructor(private _router: ActivatedRoute, private _musicService: MusicService) {
    this._music = {} as Music;
  }

  ngOnInit(): void {
  }

  get music(): Music {
    return this._music;
  }
}

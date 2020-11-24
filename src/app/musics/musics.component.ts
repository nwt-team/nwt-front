import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Music} from "../shared/interfaces/music";
import {MusicService} from "../shared/services/music.service";

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  private _musics: Music[];
  @Input()
  inputTitle: EventEmitter<string>;
  @Input()
  inputAlbum: EventEmitter<string>;

  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this.inputAlbum.subscribe(s => {
      this.refreshByAlbum(s);
    });
    this.inputTitle.subscribe(s => {
      this.refreshByTitle(s);
    });
  }

  get musics(): Music[] {
    return this._musics;
  }

  refreshByAlbum(album: string):void
  {
    this._musicService.getByAlbum(album)
      .subscribe((musics:Music[]) => this._musics = musics);
  }

  refreshByTitle(title: string):void
  {
    this._musicService.getByTitle(title)
      .subscribe((musics:Music[]) => this._musics = musics);
  }

}

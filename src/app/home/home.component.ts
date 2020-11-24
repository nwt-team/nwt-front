import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputTitle: EventEmitter<string>;
  inputAlbum: EventEmitter<string>;

  constructor() {
    this.inputAlbum = new EventEmitter<string>();
    this.inputTitle = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
}

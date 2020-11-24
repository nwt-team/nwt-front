import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatOptionSelectionChange} from "@angular/material/core";
interface OptionValue
{
  id: number;
  value: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  inputTitle: EventEmitter<string>;
  @Input()
  inputAlbum: EventEmitter<string>;
  search: string;
  selectedValue: number;
  selected: OptionValue[] = [{
        id: 1,
        value: 'Titre de la musique'
      },
      {
        id: 2,
        value: "Titre de l'album"
      }];

  constructor() {
    this.selectedValue = 1;
    this.search = '';
  }

  ngOnInit(): void {
  }

  optionChange(param: number, event: MatOptionSelectionChange):void {
    if(event.isUserInput)
    {
      this.selectedValue = param;
    }
  }

  inputChange():void {
    switch (this.selectedValue) {
      case 1 :
        this.inputTitle.emit(this.search)
        break;
      case 2 :
        this.inputAlbum.emit(this.search)
        break;
    }
  }

}

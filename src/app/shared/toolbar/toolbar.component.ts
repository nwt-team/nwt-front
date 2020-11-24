import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isConnected: boolean;
  @Input()
  showInscriptionDialog: EventEmitter<void>;
  @Input()
  showConnectionDialog: EventEmitter<void>;

  constructor() { }

  ngOnInit(): void {
  }

  connectionDialog(): void {
    this.showConnectionDialog.emit()
  }

  inscriptionDialog(): void {
    this.showInscriptionDialog.emit()
  }

}

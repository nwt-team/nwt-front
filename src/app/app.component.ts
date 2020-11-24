import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nwt-front';

  showInscriptionDialog: EventEmitter<void>;
  showConnectionDialog: EventEmitter<void>;

  constructor() {
    this.showConnectionDialog = new EventEmitter<void>();
    this.showInscriptionDialog = new EventEmitter<void>();
  }
}

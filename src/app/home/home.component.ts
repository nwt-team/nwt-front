import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../shared/dialogs/dialog/dialog.component";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/interfaces/user";
import {Observable} from "rxjs";
import {filter, map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputTitle: EventEmitter<string>;
  inputAlbum: EventEmitter<string>;

  @Input()
  showInscriptionDialog: EventEmitter<void>;
  @Input()
  showConnectionDialog: EventEmitter<void>;

  isConnected: boolean;

  private _user: User;

  private userDialog: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog, private _userService: UserService) {
    //Emitters for inputs
    this.inputAlbum = new EventEmitter<string>();
    this.inputTitle = new EventEmitter<string>();

    //Emitters for dialog
    this.showConnectionDialog = new EventEmitter<void>();
    this.showInscriptionDialog = new EventEmitter<void>();

    this.isConnected = false;
    this._user = {} as User;
  }

  ngOnInit(): void {
  }

  get dialogStatus(): string {
    return this.dialogStatus;
  }


  get user(): User {
    return this._user;
  }

  showDialog(){
    this.userDialog = this.dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });


    this.userDialog.afterClosed()
      .pipe(
        filter(_ => !!_),
        map((_: User) => {

          delete _.id;

          return _;
        }),
        mergeMap(_ => this._create(_))
      )
      .subscribe(
        (user: User) => {
          this._user = user;
          this.isConnected = true;
        },
        _ => this.isConnected =false,
        () => this.isConnected=false,
      );
  }

  private _create(user: User): Observable<User> {
    return this._userService.create(user)
  }
}

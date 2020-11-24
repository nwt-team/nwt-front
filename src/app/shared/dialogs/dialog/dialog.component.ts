import {Component, EventEmitter, Inject, Input, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Optional() @Inject(MAT_DIALOG_DATA) private _user: User) { }

  ngOnInit(): void {
  }

  get user(): User {
    return this._user;
  }


  set user(value: User) {
    this._user = value;
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(user: User){
    this.dialogRef.close(user)
  }

}

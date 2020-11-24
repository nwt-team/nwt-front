import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  private readonly _cancel$: EventEmitter<void>
  private readonly _submit$: EventEmitter<User>
  private readonly _form: FormGroup;

  constructor() {
    this._cancel$ = new EventEmitter<void>();
    this._submit$ = new EventEmitter<User>();
    this._form = new FormGroup({
      id: new FormControl(),
      login: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
      ])),
      firstname: new FormControl('', Validators.compose([
        Validators.minLength(2)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.minLength(2)
      ])),
      birthDate: new FormControl(),
      email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      avatar: new FormControl(),
    });
  }

  ngOnInit(): void {
  }


  get form(): FormGroup {
    return this._form;
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  @Output('submit')
  get submit$(): EventEmitter<User> {
    return this._submit$;
  }

  cancel(){
    this.cancel$.emit();
  }

  submit(user: User){
    this.submit$.emit(user);
  }
}

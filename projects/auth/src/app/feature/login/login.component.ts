import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'if-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public controls = {
    usuario: new FormControl(null, Validators.required),
    senha: new FormControl()
  };
  
  public form: FormGroup;
  public isValidSenha: any;
  public isValidUsuario: any;
  
  constructor() {
    this.form = new FormGroup(this.controls);
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submit(): void {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }
}

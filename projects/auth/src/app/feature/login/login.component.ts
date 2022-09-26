import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';


@Component({
  selector: 'if-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public controls = {
    cpf: new FormControl(null, Validators.required),
    senha: new FormControl()
  };
  
  public form: FormGroup;

  constructor( private router: Router, private authService: AuthService) {
    this.form = new FormGroup(this.controls);
  }

  public submit(): void {
    if (this.form.valid) {
      const username = this.form.get('cpf')?.value;
      const password = this.form.get('senha')?.value;
      this.authService.postAuthenticate(username, password).subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        err => {
          console.log('error')
          this.form.reset();
        }
      );
    }
  }
}

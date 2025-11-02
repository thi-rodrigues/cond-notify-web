import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from "ngx-mask";
import { Login } from '../../../model/login.interface';
import { LoginService } from '../../../services/login.service';
import { MessageService } from '../../../services/message.service';
import { Error } from '../../../model/type-error';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private messageService: MessageService
  ) { }

  form = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    password: new FormControl('')
  })

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    let login: Login = { login: this.form.value.cpf!, password: this.form.value.password!, token: '' };
    // this.loginService.login(login).subscribe(res => {
    //   localStorage.setItem("token", res.token)
      this.messageService.showMessage('Login efetuado com sucesso!', Error.SUCCESS);

      if (login.login.includes('069')) {
        location.href = '/home';
      } else {
        location.href = '/order-register';
      }
    // }, error => {
    //   if (error.error) {
    //     console.log(error.error.message);
    //     this.messageService.showMessage(error.error.message, Error.ERROR);
    //   }
    //   else {
    //     this.messageService.showMessage('Erro ao fazer login', Error.ERROR);
    //     console.log(error);
    //   }
    // });
  }
}

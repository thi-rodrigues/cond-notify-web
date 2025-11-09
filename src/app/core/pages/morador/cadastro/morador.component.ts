import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from "ngx-mask";
import { MoradorService } from '../../../../services/morador.service';
import { Morador } from '../../../../model/morador.interface';
import { MessageService } from '../../../../services/message.service';
import { Alert } from '../../../../model/alert';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-morador',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, NgxMaskDirective, RouterLink],
  templateUrl: './morador.component.html',
  styleUrl: './morador.component.scss'
})
export class MoradorComponent {

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    bloco: new FormControl('', [Validators.required]),
    apartamento: new FormControl('', [Validators.required])
  });

  constructor(
    private moradorService: MoradorService,
    private messageService: MessageService
  ) {}

  save() {
    let morador =  this.form.value as Morador;
    this.moradorService.cadastrarMorador(morador).subscribe(res => {
      this.form.reset();
      this.messageService.showMessage("Cadastrado com sucesso!", Alert.SUCCESS);
      console.log(res);
      }, error => {
      this.messageService.showMessage("Erro ao cadastrar!", Alert.ERROR);
      console.log(error);
    })

  }

}

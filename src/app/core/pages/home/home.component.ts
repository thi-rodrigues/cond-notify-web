import { Component, OnInit } from '@angular/core';
import { CardHomeComponent } from "../../../shared/cards/card-home/card-home.component";
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CardHomeComponent, RouterLink, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(readonly userService: UserService){}

  ngOnInit(): void {
    console.log('HomeComponent');
    // console.log(this.userService.getUser());

  }

  form = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    password: new FormControl('')
  })

}

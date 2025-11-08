import { Component, OnInit } from '@angular/core';
import { CardOrdersComponent } from "../../../shared/cards/card-home/card-home.component";
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CardOrdersComponent, RouterLink, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('HomeComponent');
  }

  form = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    password: new FormControl('')
  })

}

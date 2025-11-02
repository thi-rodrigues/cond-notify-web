import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.scss',
})
export class OrderRegisterComponent {

  form = new FormGroup({
    recipient: new FormControl('', [Validators.required, Validators.minLength(1)]),
    observation: new FormControl(''),
  });

  openModalPhoto() {

  }

  sendNotification() {

  }
}

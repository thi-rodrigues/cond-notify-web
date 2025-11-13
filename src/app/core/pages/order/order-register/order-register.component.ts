import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule,
    MatInputModule, MatButtonModule,
    MatIconModule,
    RouterLink, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,],
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.scss',
})
export class OrderRegisterComponent implements OnInit {

  moradores: string[] = ['One', 'Two', 'Three']; // TODO: listar todos os moradores
  filteredOptions!: Observable<string[]>;

  form = new FormGroup({
    morador: new FormControl(''),
    observation: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  ngOnInit() {
    this.filteredOptions = this.form.get('morador')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.moradores.filter(morador => morador.toLowerCase().includes(filterValue));
  }

  openModalPhoto() {

  }

  sendNotification() {
    console.log(this.form.value);

  }
}

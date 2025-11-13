import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.scss'
})
export class CardHomeComponent implements OnInit {

  @Input()
  name!: String;
  @Input()
  image!: String;

  constructor() { }

  ngOnInit(): void {

  }



}

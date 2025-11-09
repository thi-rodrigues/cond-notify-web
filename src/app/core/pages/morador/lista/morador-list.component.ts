import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Morador } from '../../../../model/morador.interface';
import { MoradorService } from '../../../../services/morador.service';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-morador-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, RouterLink, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './morador-list.component.html',
  styleUrl: './morador-list.component.scss'
})
export class MoradorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['codigo', 'nome', 'bloco', 'apartamento'];
  morador!: Morador[];

  constructor(
    private moradorService: MoradorService
  ){}

  ngOnInit(): void {
    this.buscarMoradores();
  }

  buscarMoradores() {
    this.moradorService.buscarMoradores(null, 0, 10).subscribe(res => {
      console.log(res);
      this.morador = res.content;
      console.log(this.morador);
    });
  }
}
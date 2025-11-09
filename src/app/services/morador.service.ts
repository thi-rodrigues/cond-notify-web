import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.homologacao';
import { HttpClient } from '@angular/common/http';
import { Morador } from '../model/morador.interface';
import Pageable from '../model/pageable.interface';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private apiBackend = `${environment.apiBackend}/morador`;

  constructor(readonly http: HttpClient) {}

  cadastrarMorador(morador: Morador) {
    return this.http.post<Morador>(`${this.apiBackend}/cadastrar`, morador);
  }

  buscarMoradores(data: any, page: number, size: number) {
    if (!data) {
      data = {sort: 'dataCriacao', sortDirection: 'DESC'}
    }
    return this.http.post<Pageable<Morador>>(`${this.apiBackend}/todos?page=${page}&size=${size}${data.sort ? '&sort=' + data.sort : ''}${data.sortDirection ? '&sortDirection=' + data.sortDirection : ''}`,
      {});
  }
}

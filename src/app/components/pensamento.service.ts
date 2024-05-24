import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento } from '../pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API: string = "http://localhost:3000/pensamentos"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<IPensamento[]>(this.API);
  }

  criar(pensamento: IPensamento) {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number) {
    return this.http.delete<IPensamento>(this.API + `/${id}`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento } from '../pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API: string = "http://localhost:3000/pensamentos"
  constructor(private http: HttpClient) { }

  buscarPorAutor(autoria: string): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(`${this.API}?q=${autoria}`)
  }

  buscarId(id: string): Observable<IPensamento> {
    return this.http.get<IPensamento>(`${this.API}/${id}`);
  }

  listar(pagina: number) {
    let itensPorPagina = 6;
    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)

    return this.http.get<IPensamento[]>(this.API, { params });
  }

  listarPensamentosFavoritados(pagina: number) {
    let itensPorPagina = 6;
    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina).set("favorito", true);

    console.log(params);
    return this.http.get<IPensamento[]>(this.API, { params })
  }

  criar(pensamento: IPensamento) {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.put<IPensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }

  excluir(id: number) {
    return this.http.delete<IPensamento>(this.API + `/${id}`);
  }
}

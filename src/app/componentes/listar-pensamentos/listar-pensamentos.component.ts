import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../../components/pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { IPensamento } from '../../pensamento';
import { PensamentoService } from '../../components/pensamento.service';
import { BotaoCarregarMaisComponent } from './botao-carregar-mais/botao-carregar-mais.component';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [
    RouterModule, 
    PensamentoComponent,
    CommonModule,
    BotaoCarregarMaisComponent
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(listaPensamentos.length == 0) {
        this.haMaisPensamentos = false;
      }
    });
  }
}

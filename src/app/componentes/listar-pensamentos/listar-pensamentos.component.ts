import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../../components/pensamento/pensamento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [
    RouterModule, 
    PensamentoComponent,
    CommonModule
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: "Repasse de props no angular",
      autoria: "Componente pai",
      modelo: "modelo1"
    },
    {
      conteudo: "Bem escalavel, cada componente nasce com seu suas proprias 'props'",
      autoria: "Componente filho",
      modelo: "modelo2"
    }
  ];
}

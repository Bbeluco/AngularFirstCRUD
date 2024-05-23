import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component'
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component'
import { ListarPensamentosComponent } from './componentes/listar-pensamentos/listar-pensamentos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RodapeComponent,
    CriarPensamentoComponent,
    CabecalhoComponent,
    ListarPensamentosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}

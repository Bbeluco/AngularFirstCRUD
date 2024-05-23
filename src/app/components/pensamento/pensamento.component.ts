import { Component,Input } from '@angular/core';

interface IPensamento {
  conteudo: string,
  autoria: string,
  modelo: string
}

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: IPensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }
}

import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { IPensamento } from '../../pensamento'
import { RouterModule } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: "",
    favorito: false
  }

  constructor(private service: PensamentoService) {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  mudarOpcaoFavoritada() {
    this.pensamento.favorito = !this.pensamento.favorito;
    this.service.editar(this.pensamento).subscribe();
  }
}

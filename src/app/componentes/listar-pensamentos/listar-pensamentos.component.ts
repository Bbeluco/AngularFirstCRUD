import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../../components/pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { IPensamento } from '../../pensamento';
import { PensamentoService } from '../../components/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [
    RouterModule, 
    PensamentoComponent,
    CommonModule,
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}

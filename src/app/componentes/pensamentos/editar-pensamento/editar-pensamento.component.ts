import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../components/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../../../pensamento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{

  pensamento: IPensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  } 
  
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarId(id!).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }
  
  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(["listarPensamento"]);
    })
  }
}

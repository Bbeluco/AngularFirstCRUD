import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../components/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {
  private id: string = '0';

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let potentialId = this.route.snapshot.paramMap.get('id');
    this.id = potentialId ? potentialId : '0';
  }

  excluirPensamento() {
    this.service.excluir(Number.parseInt(this.id)).subscribe(() => {
      this.router.navigate(['listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['listarPensamento']);
  }

}

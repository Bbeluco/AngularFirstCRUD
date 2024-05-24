import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from '../../../components/pensamento.service';
import { IPensamento } from '../../../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      autoria: [''],
      modelo: ['']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }
}

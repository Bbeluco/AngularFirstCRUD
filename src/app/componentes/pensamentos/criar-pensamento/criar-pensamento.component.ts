import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from '../../../components/pensamento.service';
import { CommonModule } from '@angular/common';
import { minusculoValidacao } from '../../../validations';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule, 
    RouterModule,
    ReactiveFormsModule,
    CommonModule
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
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidacao
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }

  habilitarBotao() {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado'
  }
}

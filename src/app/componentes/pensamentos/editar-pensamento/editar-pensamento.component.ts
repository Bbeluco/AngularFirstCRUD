import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../components/pensamento.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IPensamento } from '../../../pensamento';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { minusculoValidacao } from '../../../validations';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{
  formulario!: FormGroup;
  
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarId(id!).subscribe(pensamento => {
      this.formulario = this.formBuilder.group({
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.min(3),
          minusculoValidacao
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    })
  }
  
  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(["listarPensamento"]);
    })
  }
}

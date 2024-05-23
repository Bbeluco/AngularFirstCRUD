import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/listar-pensamentos/listar-pensamentos.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "listarPensamento",
        pathMatch: "full"
    },
    {
        path: "criarPensamento",
        component: CriarPensamentoComponent
    },
    {
        path: "listarPensamento",
        component: ListarPensamentosComponent
    }
];

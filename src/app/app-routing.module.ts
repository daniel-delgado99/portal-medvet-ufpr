import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { DesenvolvedoresComponent } from './components/desenvolvedores/desenvolvedores.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'cadastro', component: CadastroAlunoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'desenvolvedores', component: DesenvolvedoresComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

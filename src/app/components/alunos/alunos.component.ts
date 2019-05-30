import { Component, OnInit } from '@angular/core';
import { AlunoService } from './../../services/aluno.service';
import { Aluno } from './../../model/aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[];

  constructor(private alunosService: AlunoService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

  removeAluno(index: number) {
    this.alunosService.removeAluno(index);
  }

  editAluno() {
    console.log('editAluno');
  }
}

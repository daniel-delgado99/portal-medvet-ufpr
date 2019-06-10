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

  alunosFiltered: Aluno[];

  constructor(private alunosService: AlunoService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
    this.alunosFiltered = this.alunos;
  }

  removeAluno(index: number) {
    this.alunosService.removeAluno(index);
  }

  onSearch(e: any) {
    const text = e.target.value;
    this.alunosFiltered = this.alunos.filter(aluno => aluno.name.toLowerCase().indexOf(text.toLowerCase()) !== -1);
  }
}

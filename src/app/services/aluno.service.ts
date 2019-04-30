import { Injectable } from '@angular/core';
import { Aluno } from '../model/aluno.model';

import * as data from '../data/alunos';

@Injectable()
export class AlunoService {

  private alunosList: Aluno[];

  constructor() {
    this.alunosList = [];
    for (const item of data.default) {
      this.alunosList.push(new Aluno(item.name, item.email, item.cpf, item.image));
    }
  }

  public getAlunos() {
    return this.alunosList;
  }

  public getAluno(index: number) {
    return this.alunosList[index];
  }

  public addAluno(aluno: Aluno) {
    this.alunosList.push(aluno);
  }

  public updateAluno(aluno: Aluno, index: number) {
    this.alunosList[index] = aluno;
  }

  public removeAluno(index: number) {
    this.alunosList.splice(index, 1);
  }
}

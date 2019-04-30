export class Aluno {
  name: string;
  email: string;
  cpf: string;
  image: string;

  constructor(name: string, email: string, cpf: string, image: string) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.image = image;
  }
}

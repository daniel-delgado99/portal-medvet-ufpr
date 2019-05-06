export class Aluno {
  name: string;
  email: string;
  cpf: string;
  cep: string;
  addressStreet: string;
  addressNumber: number;
  addressNeighbourhood: string;
  addressComplement: string;
  birthdate: string;
  bio: string;
  grr: string;
  isEstagiando: boolean;
  favoriteAnimal: string;
  favoriteQuote: string;
  favoriteColor: string;
  image: string;

  constructor(
    name: string,
    email: string,
    cpf: string,
    cep: string,
    addressStreet: string,
    addressNumber: number,
    addressNeighbourhood: string,
    addressComplement: string,
    birthdate: string,
    bio: string,
    grr: string,
    isEstagiando: boolean,
    favoriteAnimal: string,
    favoriteQuote: string,
    favoriteColor: string,
    image: string
  ) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.addressStreet = addressStreet;
    this.addressNumber = addressNumber;
    this.addressNeighbourhood = addressNeighbourhood;
    this.addressComplement = addressComplement;
    this.birthdate = birthdate;
    this.bio = bio;
    this.grr = grr;
    this.isEstagiando = isEstagiando;
    this.favoriteAnimal = favoriteAnimal;
    this.favoriteQuote = favoriteQuote;
    this.favoriteColor = favoriteColor;
    this.image = image;
  }
}

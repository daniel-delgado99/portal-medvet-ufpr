import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.scss']
})
export class DesenvolvedoresComponent implements OnInit {

  constructor() { }

  devs = [];

  ngOnInit() {
    this.devs = [{
      nome: 'Daniel Elias Delgado',
      foto: 'https://http2.mlstatic.com/letra-d-decorativa-verde-tiffany-em-mdf-19x18-cm-D_NQ_NP_415515-MLB25258309837_012017-F.jpg',
      contato: 'daniel.delgado9950@gmail.com',
      cargo: 'Desenvolvedor Front-End'
    }, {
      nome: 'Gustavo Lara Vaz',
      foto: 'https://st.depositphotos.com/2899123/3753/v/950/depositphotos_37531453-stock-illustration-g-orange-handwritten-letters-on.jpg',
      contato: 'gulara@gmail.com',
      cargo: 'Desenvolvedor Fullstack'
    }, {
      nome: 'Lucas Antonio Amorim Moroski',
      foto: 'https://images-submarino.b2w.io/produtos/01/00/oferta/34910/8/34910824_1GG.jpg',
      contato: 'lucasmoroskicurso@gmail.com',
      cargo: 'Desenvolvedor Fullstack'
    }];
  }

}

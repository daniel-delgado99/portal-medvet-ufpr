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
      foto: 'https://d.wattpad.com/story_parts/312025151/images/14754abb9e218119967800248515.jpg',
      contato: 'noideaforemails@gmail.com',
      cargo: 'Faz-tudo'
    }, {
      nome: 'Gustavo Lara Vaz',
      foto: 'https://assets-jpcust.jwpsrv.com/thumbnails/idzhcp6y-720.jpg',
      contato: 'guslara@gmail.com',
      cargo: 'Sacola'
    }, {
      nome: 'Lucas Antonio Amorim Moroski',
      foto: 'https://img.quizur.com/f/img5ce56ac33745a8.13458145.jpeg?lastEdited=1558538982',
      contato: 'lucasmoroskicurso@gmail.com',
      cargo: 'Suporte'
    }];
  }

}

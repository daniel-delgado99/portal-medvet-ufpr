import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avisos = [{
    title: 'NOVO EDITAL BOLSA INSTRUTOR – Profª Márcia O. Lopes – Entrevista 11.04.2019',
    content: 'EDITAL BOLSA INSTRUTOR - Profª Márcia O. Lopes'
  }, {
    title: 'VIVÊNCIAS AGRUPADAS POR CATEGORIAS',
    content: `Visando estimular a interdisciplinaridade no curso, as disciplinas foram agrupadas em seis eixos gerais:
    Eixo de Ciências Básicas Eixo de ...`
  }, {
    title: 'EDITAL CURSO DE FÉRIAS EM JANEIRO 2019 – CARDIOLOGIA VETERINÁRIA',
    content: 'EDITAL DISCIPLINA OPTATIVA CARDIOLOGIA VETERINÁRIA Janeiro 2019'
  }];

  ngOnInit() {
  }

}

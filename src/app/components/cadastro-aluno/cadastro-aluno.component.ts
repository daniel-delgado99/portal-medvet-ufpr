import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from './../../model/aluno.model';

import { CropperSettings } from 'ng2-img-cropper';



@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent implements OnInit {

  @ViewChild('cropper') cropper;
  @ViewChild('modalBtn') modalBtn: ElementRef;

  alunos: Aluno[];

  form: FormGroup;

  data: any;

  imageInput: any;

  imgSrc = '';

  cropperSettings: CropperSettings;

  constructor(private alunosService: AlunoService,
              private fb: FormBuilder) {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 300;
        this.cropperSettings.croppedHeight = 300;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.rounded = true;

        this.data = {};
  }

  ngOnInit() {
    this.setDefaultImage();
    this.alunos = this.alunosService.getAlunos();

    this.form = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      cpf: this.fb.control(''),
      cep: this.fb.control(''),
      addressStreet: this.fb.control(''),
      addressNumber: this.fb.control(''),
      addressNeighbourhood: this.fb.control(''),
      addressComplement: this.fb.control(''),
      birthdate: this.fb.control(''),
      bio: this.fb.control(''),
      grr: this.fb.control(''),
      isEstagiando: this.fb.control(''),
      favoriteAnimal: this.fb.control(''),
      favoriteQuote: this.fb.control(''),
      favoriteColor: this.fb.control(''),
      image: this.fb.control(''),
    });
  }

  setDefaultImage() {
    const n = (Math.random() * 10);
    let animal = '';
    if (n >= 0 && n < 2) {
      animal = 'garyuu';
    } else if (n >= 2 && n < 3) {
      animal = 'gyudon';
    } else if (n >= 3 && n < 4) {
      animal = 'jiro';
    } else if (n >= 4 && n < 5) {
      animal = 'mukurowl';
    } else if (n >= 5 && n < 6) {
      animal = 'nuts';
    } else if (n >= 6 && n < 8) {
      animal = 'roll';
    } else {
      animal = 'uri';
    }
    this.imgSrc = `./../../../assets/imgs/animals/${animal}.jpg`;
  }

  onFormSubmit() {
    const value = this.form.value;
    value.image = this.imgSrc;

    console.log(value);

    this.alunosService.addAluno(value);

    this.alunos = this.alunosService.getAlunos();

    this.form.reset();
  }

  removeAluno(index: number) {
    this.alunosService.removeAluno(index);
  }

  editAluno() {
    console.log('editAluno');
  }

  openImageSelectModal() {
    const el: HTMLElement = this.modalBtn.nativeElement as HTMLElement;
    el.click();
  }

  fileChangeListener($event) {
    console.log('file change listener');
    const image = new Image();
    const file = $event.target.files[0];
    const fileReader = new FileReader();
    const that = this;
    fileReader.onloadend = (event: any) => {
      image.src = event.target.result;
      that.cropper.setImage(image);
    };
    fileReader.readAsDataURL(file);
  }

  saveImg() {
    this.imgSrc = this.data.image;
  }
}

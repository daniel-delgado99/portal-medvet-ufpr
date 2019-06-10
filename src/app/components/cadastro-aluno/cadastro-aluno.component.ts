import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  @ViewChild('modalImageBtn') modalImageBtn: ElementRef;
  @ViewChild('modalSucessBtn') modalSuccessBtn: ElementRef;
  @ViewChild('modalErrorBtn') modalErrorBtn: ElementRef;

  cpfMask = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  cepMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  grrMask = ['G', 'R', 'R', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  form: FormGroup;

  data: any;

  imageInput: any;

  imgSrc = '';

  idAluno: number;

  aluno: Aluno;

  errorModalText = 'Erro!';


  cropperSettings: CropperSettings;

  constructor(private alunosService: AlunoService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
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
    this.idAluno = this.route.snapshot.params['id'];
    if (this.idAluno > 0) {
      this.aluno = this.alunosService.getAluno(this.idAluno);
      this.imgSrc = this.aluno.image;
    } else {
      this.setDefaultImage();
    }

    this.form = this.fb.group({
      name: this.fb.control((this.aluno && this.aluno.name) || '', Validators.required),
      email: this.fb.control((this.aluno && this.aluno.email) || '', Validators.required),
      cpf: this.fb.control((this.aluno && this.aluno.cpf) || '', Validators.required),
      cep: this.fb.control((this.aluno && this.aluno.cep) || ''),
      addressStreet: this.fb.control((this.aluno && this.aluno.addressStreet) || ''),
      addressNumber: this.fb.control((this.aluno && this.aluno.addressNumber) || ''),
      addressNeighbourhood: this.fb.control((this.aluno && this.aluno.addressNeighbourhood) || ''),
      addressComplement: this.fb.control((this.aluno && this.aluno.addressComplement) || ''),
      birthdate: this.fb.control((this.aluno && this.aluno.birthdate) || ''),
      bio: this.fb.control((this.aluno && this.aluno.bio) || ''),
      grr: this.fb.control((this.aluno && this.aluno.grr) || ''),
      isEstagiando: this.fb.control((this.aluno && this.aluno.isEstagiando) || ''),
      favoriteAnimal: this.fb.control((this.aluno && this.aluno.favoriteAnimal) || ''),
      favoriteQuote: this.fb.control((this.aluno && this.aluno.favoriteQuote) || ''),
      favoriteColor: this.fb.control((this.aluno && this.aluno.favoriteColor) || ''),
      image: this.fb.control((this.aluno && this.aluno.image) || ''),
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
    if (!value.name || !value.cpf || !value.email) {
      if (!value.email) {
        this.errorModalText = 'Favor preencher o e-mail!';
      }
      if (!value.cpf) {
        this.errorModalText = 'Favor preencher o CPF!';
      }
      if (!value.name) {
        this.errorModalText = 'Favor preencher o nome!';
      }
      const el: HTMLElement = this.modalErrorBtn.nativeElement as HTMLElement;
      el.click();

      return;
    }

    value.image = this.imgSrc;
    if (this.idAluno > 0) {
      this.alunosService.updateAluno(value, this.idAluno);
    } else {
      this.alunosService.addAluno(value);
    }
    this.form.reset();
    this.setDefaultImage();
    this.idAluno = null;
    const el: HTMLElement = this.modalSuccessBtn.nativeElement as HTMLElement;
    el.click();
  }

  openImageSelectModal() {
    const el: HTMLElement = this.modalImageBtn.nativeElement as HTMLElement;
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

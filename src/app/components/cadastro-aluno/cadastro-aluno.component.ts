import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("cropper") cropper;

  alunos: Aluno[];

  form: FormGroup;

  data: any;

  imgSrc: string = '';

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
    this.alunos = this.alunosService.getAlunos();

    this.form = this.fb.group({
      name: this.fb.control(''),
      cpf: this.fb.control(''),
      email: this.fb.control(''),
      image: this.fb.control('')
    });
  }

  onFormSubmit() {
    let value = this.form.value;
		value.image = this.data.image;

	console.log(value);

    this.alunosService.addAluno(value);

    this.alunos = this.alunosService.getAlunos();

    this.form.reset();
  }

  removeAluno(index: number) {
    this.alunosService.removeAluno(index);
  }

  editAluno() {
    console.log("editAluno")
  }

   fileChangeListener($event) {
	   console.log("file change listener");
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
		that.imgSrc = image.src;
    };

    myReader.readAsDataURL(file);
	}

}

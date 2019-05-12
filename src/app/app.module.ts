// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ImageCropperComponent } from 'ng2-img-cropper';

// Services
import { AlunoService } from './services/aluno.service';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { DesenvolvedoresComponent } from './components/desenvolvedores/desenvolvedores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CadastroAlunoComponent,
    ImageCropperComponent,
    NotFoundComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DocumentosComponent,
    AlunosComponent,
    DesenvolvedoresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

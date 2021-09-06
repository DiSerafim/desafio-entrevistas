import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { AdicionarComponent } from './adicionar/adicionar.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { DirecaoComponent } from './direcao/direcao.component';
import { OperacionalComponent } from './operacional/operacional.component';
import { InfraestruturaComponent } from './infraestrutura/infraestrutura.component';
import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { ComercialComponent } from './comercial/comercial.component';

@NgModule({
  declarations: [
    AdicionarComponent,
    AdministracaoComponent,
    AppComponent,
    ColaboradoresComponent,
    ComercialComponent,
    DesenvolvimentoComponent,
    DirecaoComponent,
    EditarComponent,
    ExcluirComponent,
    FinanceiroComponent,
    HeaderComponent,
    HomeComponent,
    InfraestruturaComponent,
    NaoEncontradoComponent,
    NavegacaoComponent,
    OperacionalComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'administracao', component: AdministracaoComponent },
      { path: 'comercial', component: ComercialComponent },
      { path: 'desenvolvimento', component: DesenvolvimentoComponent },
      { path: 'direcao', component: DirecaoComponent },
      { path: 'financeiro', component: FinanceiroComponent },
      { path: 'infraestrutura', component: InfraestruturaComponent },
      { path: 'operacional', component: OperacionalComponent },
      { path: 'detalhes', component: ColaboradoresComponent },
      { path: 'cadastrar', component: AdicionarComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'editar', component: EditarComponent },
      { path: 'excluir', component: ExcluirComponent },
      { path: '**', component: NaoEncontradoComponent },
    ])
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

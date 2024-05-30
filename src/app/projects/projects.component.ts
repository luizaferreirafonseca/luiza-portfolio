import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { __values } from 'tslib';
import { Card } from '../models/Card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  
  

  cards:Card[] = [
    {
      imageSrc: 'assets/images/five.png',
      title: 'To-do List',
      description: 'Gerenciador de tarefas, no qual você pode adicionar uma nova tarefa, deletar, excluir ou até mesmo atualizar. Possui página de login e cadastro para o usuário, ainda em construção, e todo gerenciador é manipulado com a API no backend desenvolvida em C# e no frontend em Angular.',
      githubLink: 'https://github.com/luizaferreirafonseca/todolist-'
    },
    {
      imageSrc: 'assets/images/three.png',
      title: 'Sistema escolar',
      description: 'Projeto feito para treinar funções principais do CRUD.  É um sistema escolar, no qual manipulamos a área do administrador e podemos adicionar um aluno, deletar, visualizar e atualizar a matrícula de um aluno. O sistema é feito em Angular no frontend com o backend em Node.js',
      githubLink: 'https://students-registers.netlify.app/'
    },
    {
      imageSrc: 'assets/images/one.png',
      title: 'Sistema bancário',
      description: 'Projeto final do curso SharpCoders, realizado em grupo. Esse sistema de banco possui diversas features em funcionamento: cadastro, login, home do usuário e gerenciamento de suas transações bancárias e ajuda. É possível realizar transações bancárias como: saque, transferência e depósito (esses dois últimos sendo apenas simulações). O sistema é desenvolvido com frontend em Angular e backend em C#, utilizando .NET.',
      githubLink: 'https://apollo-bank.vercel.app/home'
    },
    {
      imageSrc: 'assets/images/four.png',
      title: 'Pokemon API',
      description: 'Essa feature está em desenvolvimento para criar uma simulação de jogos de pokemon. Ela foi criada para treinar a consumação de API em Javascript. Será possível escolher um jogador (pokemon), identificar todas suas características, pontos fortes e fracos. Além disso, será possível realizar o login na conta do jogador e manipular todas as informações. O sistema utiliza HTML, CSS e Javascript.',
      githubLink: 'https://luizaferreirafonseca.github.io/Pokemon-Website/'
    },
  ]


  viewClick(card:Card):void {
    window.open(card.githubLink, '_blank');

}


}




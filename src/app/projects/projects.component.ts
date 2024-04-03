import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  cards = [
    {
      imageSrc: 'assets/images/five.png',
      title: 'To-do List',
      description: 'Gerenciador de tarefas, no qual você pode adicionar uma nova tarefa, deletar, excluir ou até mesmo atualizar. Possui página de login e cadastro para o usuário, ainda em construção, e todo gerenciador é manipulado com a API no backend desenvolvida em C# e no frontend em Angular.'
    },
    {
      imageSrc: 'assets/images/five.png',
      title: 'Sistema escolar',
      description: 'Projeto feito para treinar funções principais do CRUD. É um sistema escolar, no qual manipulamos a área do administrador e podemos adicionar um aluno, deletar, visualizar e atualizar a matrícula de um aluno. O sistema é feito em Angular no frontend com o backend de API em C#.'
    },
    {
      imageSrc: 'assets/images/three.png',
      title: 'Sistema escolar',
      description: 'Projeto feito para treinar funções principais do CRUD. É um sistema escolar, no qual manipulamos a área do administrador e podemos adicionar um aluno, deletar, visualizar e atualizar a matrícula de um aluno. O sistema é feito em Angular no frontend com o backend de API em C#.'
    },
    {
      imageSrc: 'assets/images/three.png',
      title: 'Sistema escolar',
      description: 'Projeto feito para treinar funções principais do CRUD. É um sistema escolar, no qual manipulamos a área do administrador e podemos adicionar um aluno, deletar, visualizar e atualizar a matrícula de um aluno. O sistema é feito em Angular no frontend com o backend de API em C#.'
    },
  ]
}

import {Component, input} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  public title: string = 'Bem vindo a pagina inicial!';

  public pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
  };
  public listHobbies: string[] = ['Programar', 'Ler', 'Correr', 'Jogar Futebol', 'Quebrar a cara de alguém'];

  public changeName(): void {
    this.pessoa.nome = 'Maria do Rosario'
  }

  public deleteHobbies(): void {
    this.listHobbies.pop()
  }
}

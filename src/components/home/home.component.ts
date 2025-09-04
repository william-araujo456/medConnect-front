import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

class Pessoa {
  photo: string;
  name?: string;
  age?: number;
  occupation?: string;
}
@Component({
  selector: 'app-home',
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  @Input() public title: string = '';
  @Output() public titleChange = new EventEmitter<string>();
  public pessoa: Pessoa = {
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROubQ3njNDT9VqzYzylUlNzciU1LhASy3dWw&s'
  };
  public listHobbies: string[] = ['Programar', 'Ler', 'Correr', 'Jogar Futebol', 'Quebrar a cara de alguém'];

  public changeTitle(): void {
    this.titleChange.emit(this.pessoa.name);
  }

  public deleteHobbies(): void {
    this.listHobbies.pop()
  }
}

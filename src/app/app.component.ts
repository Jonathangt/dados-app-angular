import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados-angular';

  dadoIzq = '../assets/img/dice1.png';
  dadoDer = '../assets/img/dice5.png';

  numIzq = 1;
  numDer = 2;

  tirarDados():void{
    this.numIzq = Math.round(Math.random()*5)+1;
    this.numDer = Math.round(Math.random()*5)+1;

    this.dadoIzq = `../assets/img/dice${this.numIzq}.png`
    this.dadoDer = `../assets/img/dice${this.numDer}.png`

  }


}
